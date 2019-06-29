import React from 'react';
import * as TestUtils from 'react-dom/test-utils';

import AuthenticationHeader from 'components/AuthenticationHeader/AuthenticationHeader';
import MockUserStore from '../../mocks/stores/MockUserStore';
import DOM from '../../testHelpers/dom';

describe('AuthenticationHeader', () => {
  let loginRedirector, redirectFunc;

  beforeEach(() => {
    redirectFunc = jest.fn();
    loginRedirector = {
      redirect: redirectFunc
    };
  });

  function render(userStore, redirector) {
    return TestUtils.renderIntoDocument(
      <AuthenticationHeader userStore={userStore} loginRedirector={redirector} />
    );
  }

  describe('when not authenticated', () => {
    it('redirects to Rails', async () => {
      // this is insane, but sure
      // the first await resolves the first level of promises, which is the API call
      // the second await is a convenient nextTick to let thrown error/rejected promise
      // resolve
      await await render(new MockUserStore({ should401: true }), loginRedirector);
      expect(redirectFunc).toHaveBeenCalledTimes(1);
    });
  });

  describe('when authenticated', () => {
    it('displays the logged in users name', async () => {
      const user = { name: 'Foobar Baz' };
      const mockUserStore = new MockUserStore({ currentUser: user });

      const header = await render(mockUserStore, loginRedirector);
      const headerDiv = DOM.findRenderedNodeForComponent(header);
      expect(headerDiv.textContent).toMatch(/Foobar Baz/);
    });
  });
});
