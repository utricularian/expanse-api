import React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import App from 'components/App';
import Home from 'components/Home/Home';
import AuthenticationHeader from 'components/AuthenticationHeader/AuthenticationHeader';

import MockSystemsStore from '../mocks/stores/MockSystemsStore';
import MockUserStore from '../mocks/stores/MockUserStore';

jest.mock('components/Home/Home');
jest.mock('components/AuthenticationHeader/AuthenticationHeader');

describe('App', () => {
  let systemsStore, systemObjectsStore, userStore, redirector, redirectFunc;

  beforeEach(() => {
    systemsStore = new MockSystemsStore();
    systemObjectsStore = {};
    userStore = new MockUserStore();
    redirectFunc = jest.fn();
    redirector = {
      redirect: redirectFunc
    };
  });

  afterEach(() => {
    Home.mockClear();
    AuthenticationHeader.mockClear();
  });

  function render(aSystemStore, aSystemObjectStore, aUserStore) {
    return TestUtils.renderIntoDocument(
      <MemoryRouter>
        <App
          systemsStore={aSystemStore}
          systemObjectsStore={aSystemObjectStore}
          userStore={aUserStore}
          loginRedirector={redirector}
        />
      </MemoryRouter>
    );
  }

  it('renders without crashing', () => {
    const router = render(systemsStore, systemObjectsStore, userStore);
    expect(router).not.toEqual(undefined);
  });

  it('always renders the AuthenticationHeader', () => {
    render(systemsStore, systemObjectsStore, userStore);

    expect(AuthenticationHeader).toHaveBeenCalledTimes(1);
    const authenticationHeaderInstance = AuthenticationHeader.mock.instances[0];
    expect(authenticationHeaderInstance.props.userStore).toEqual(userStore);
  });

  it('defaults to the Home route', () => {
    render(systemsStore, systemObjectsStore, userStore);

    expect(Home).toHaveBeenCalledTimes(1);
    const homeInstance = Home.mock.instances[0];
    expect(homeInstance.props.systemsStore).toEqual(systemsStore);
    expect(homeInstance.props.systemObjectsStore).toEqual(systemObjectsStore);
  });
});
