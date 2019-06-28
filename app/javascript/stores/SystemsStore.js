import System from 'models/System';
import { observable } from 'mobx';

export default class SystemsStore {
  @observable systems = [];

  constructor(props) {
    this.request = props.apiRequest;
  }

  async findAll() {
    const fromServer = await this.request.makeRequest('/api/v1/systems');
    this.systems = [];
    fromServer.data.forEach((datum) => {
      this.systems.push(new System(datum.attributes));
    });
    return this.systems;
  }
}
