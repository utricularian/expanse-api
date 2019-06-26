import System from 'models/System';

export default class SystemsStore {
  constructor(props) {
    this.request = props.apiRequest;
  }

  async findAll() {
    const fromServer = await this.request.makeRequest('/api/v1/systems');
    const systems = [];
    fromServer.data.forEach((datum) => {
      systems.push(new System(datum.attributes));
    });
    return systems;
  }
}
