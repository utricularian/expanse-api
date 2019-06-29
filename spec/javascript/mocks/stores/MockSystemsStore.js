
import SystemsStore from 'stores/SystemsStore';

export default class MockSystemsStore extends SystemsStore {
  constructor(props) {
    super(props || {});
    this._data = props && props.mockData ? props.mockData : [];
  }

  async findAll() {
    this._findAllPromise = await Promise.resolve(this._data);
    this.systems = this._data;
    return this._findAllPromise;
  }

  findAllPromise() {
    return this._findAllPromise;
  }
}
