import SystemObject from 'models/SystemObject';

class SystemObjectFactory {
  static createSystemObject(options) {
    const rand = Math.floor(Math.random() * 100000);
    return new SystemObject({
      name: options.name || `SystemObject ${rand}`,
      type: options.type || 'rocky planet',
      systemId: options.system.id,
      distanceFromSystemCenter: options.distanceFromSystemCenter === undefined
        ? rand : options.distanceFromSystemCenter,
      radiansFromSystemGate: options.radiansFromSystemGate === undefined
        ? rand % 3 : options.radiansFromSystemGate
    });
  }
}

export default SystemObjectFactory;
