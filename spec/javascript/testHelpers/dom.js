
import * as TestUtils from 'react-dom/test-utils';


const simulateEvent = (componentOrElement, eventType, eventData) => {
  const targetFn = TestUtils.Simulate[eventType];
  if (eventData) {
    targetFn(componentOrElement, eventData);
  }
  else {
    targetFn(componentOrElement);
  }
};

const findTag = (componentOrElement, tag) => {
  return TestUtils.findRenderedDOMComponentWithTag(componentOrElement, tag);
};

const clickTag = (componentOrElement, tag) => {
  simulateEvent(findTag(componentOrElement, tag), 'click');
};

export default {
  findTag,
  clickTag,
  simulateEvent
};
