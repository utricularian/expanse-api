import React from 'react';
import * as TestUtils from 'react-dom/test-utils';

import Home from 'components/Home/Home';

import MockSystemsStore from '../../mocks/stores/MockSystemsStore';
import DOM from '../../testHelpers/dom';

describe('Home', () => {
  let home, homeDiv, systemsStore, systemObjectsStore, loginCallback;

  beforeEach(() => {
    systemsStore = new MockSystemsStore();
    systemObjectsStore = {};
    loginCallback = jest.fn();

    home = TestUtils.renderIntoDocument(
      <Home
        systemsStore={systemsStore}
        systemObjectsStore={systemObjectsStore}
        loginCallback={loginCallback}
      />
    );
    homeDiv = DOM.findAllTags(home, 'div')[0];
  });

  it('initializes with a rendered GlobalStats', () => {
    expect(homeDiv.textContent).toMatch(/Global Stats/);
    expect(homeDiv.textContent).not.toMatch(/Username:/);
  });

  describe('after closing Global Stats', () => {
    beforeEach(() => {
      DOM.clickTag(home, 'button');
      homeDiv = DOM.findAllTags(home, 'div')[0];
    });

    it('should no longer display Global Stats', () => {
      expect(homeDiv.textContent).not.toMatch(/Global Stats/);
    });

    it('should prompt the user to enter their username', () => {
      expect(homeDiv.textContent).toMatch(/Username:/);
    });
  });
});
