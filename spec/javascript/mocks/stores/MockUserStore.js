import { observable } from 'mobx';

export default class MockUserStore {
  @observable currentUser;

  constructor(propsParam) {
    const props = propsParam || {};
    this._currentUser = props.currentUser;
    this._should401 = props.should401 || false;
  }

  async fetchCurrentUser() {
    this._fetchCurrentUserPromise = await Promise.resolve(this._currentUser);
    if (this._should401) {
      throw new Error('Not Authenticated');
    }
    this.currentUser = this._currentUser;
    return this.currentUser;
  }

  fetchCurrentUserPromise() {
    return this._fetchCurrentUserPromise;
  }
}
