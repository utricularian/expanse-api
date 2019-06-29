import { observable } from 'mobx';

export default class UserStore {
  @observable currentUser;

  constructor(props) {
    this.request = props.apiRequest;
  }

  async fetchCurrentUser() {
    const fromServer = await this.request.makeRequest('/api/v1/current_user');
    this.currentUser = fromServer.data.attributes;
    return this.currentUser;
  }
}
