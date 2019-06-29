import UserStore from 'stores/UserStore';
import ApiRequest from 'helpers/ApiRequest';

jest.mock('helpers/ApiRequest');

describe('UserStore', () => {
  let makeRequestMock, store;

  beforeEach(() => {
    ApiRequest.mockClear();
    makeRequestMock = jest.fn().mockImplementation(() => {
      return Promise.resolve({ data: {} });
    });

    ApiRequest.mockImplementation(() => {
      return {
        makeRequest: makeRequestMock
      };
    });

    store = new UserStore({ apiRequest: new ApiRequest() });
  });

  describe('#fetchCurrentUser', () => {
    it('makes an API call', () => {
      const makeRequestMockCalls = makeRequestMock.mock.calls;
      expect(makeRequestMockCalls.length).toEqual(0);

      store.fetchCurrentUser();

      expect(makeRequestMockCalls.length).toEqual(1);
      const url = makeRequestMockCalls[0][0];
      expect(url).toEqual('/api/v1/current_user');
    });

    describe('when the API call returns', () => {
      let user, userAttributes;

      beforeEach(() => {
        user = { name: 'Bobby B' };

        userAttributes = JSON.parse(JSON.stringify(user));

        makeRequestMock = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            data: { attributes: userAttributes }
          });
        });

        store = new UserStore({ apiRequest: new ApiRequest() });
      });

      it('sets the observable currentUser to the returned json', async () => {
        const fromServer = await store.fetchCurrentUser();
        expect(fromServer).toEqual(user);
        expect(store.currentUser).toEqual(user);
      });
    });
  });
});
