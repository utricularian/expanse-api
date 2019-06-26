import React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import App from 'components/App';
import Home from 'components/Home/Home';

import MockSystemsStore from '../mocks/stores/MockSystemsStore';

jest.mock('components/Home/Home');

describe('App', () => {
  let systemObjectsStore;

  beforeEach(() => {
    systemObjectsStore = {};
  });

  afterEach(() => {
    Home.mockClear();
  });

  it('renders without crashing', () => {
    const router = TestUtils.renderIntoDocument(
      <MemoryRouter>
        <App systemsStore={new MockSystemsStore()} systemObjectsStore={systemObjectsStore} />
      </MemoryRouter>
    );
    expect(router).not.toEqual(undefined);
  });

  it('defaults to the Home route', () => {
    const mockSystemsStore = new MockSystemsStore();
    TestUtils.renderIntoDocument(
      <MemoryRouter>
        <App systemsStore={mockSystemsStore} systemObjectsStore={systemObjectsStore} />
      </MemoryRouter>
    );

    expect(Home).toHaveBeenCalledTimes(1);
    const homeInstance = Home.mock.instances[0];
    // expect(homeInstance).toEqual({});
    expect(homeInstance.props.systemsStore).toEqual(mockSystemsStore);
    expect(homeInstance.props.systemObjectsStore).toEqual(systemObjectsStore);
  });
});
