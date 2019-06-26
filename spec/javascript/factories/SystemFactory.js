import System from 'models/System';


class SystemFactory {
  static createSystem(propsParam) {
    const rand = Math.floor(Math.random() * 100000);
    const props = propsParam || {};
    return new System({
      id: props.id ? props.id : undefined,
      name: `System ${rand}`,
      distanceFromGalacticCore: rand,
      radiansAroundGalacticCore: rand % 3,
      createdAt: props.createdAt ? props.createdAt : undefined
    });
  }
}

export default SystemFactory;
