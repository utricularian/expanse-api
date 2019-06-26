import request from 'request-promise-native';

export default class ApiRequest {
  constructor() {
    this.base = 'http://localhost:3000';
  }

  async makeRequest(path, paramsParam) {
    const params = paramsParam || {};

    const options = {
      url: `${this.base}${path}`,
      method: params.method || 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const raw = await request(options);
    return JSON.parse(raw);
  }
}
