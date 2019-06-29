import * as TestUtils from 'react-dom/test-utils';
import * as ReactDOM from 'react-dom';


const simulateEvent = (componentOrElement, eventType, eventData) => {
  const targetFn = TestUtils.Simulate[eventType];
  if (eventData) {
    targetFn(componentOrElement, eventData);
  }
  else {
    targetFn(componentOrElement);
  }
};

const findAllTags = (componentOrElement, tag) => {
  return TestUtils.scryRenderedDOMComponentsWithTag(componentOrElement, tag);
};

const findTag = (componentOrElement, tag) => {
  return TestUtils.findRenderedDOMComponentWithTag(componentOrElement, tag);
};

const clickTag = (componentOrElement, tag) => {
  simulateEvent(findTag(componentOrElement, tag), 'click');
};

const findRenderedNodeForComponent = (componentOrElement) => {
  return ReactDOM.findDOMNode(componentOrElement); // eslint-disable-line react/no-find-dom-node
};

export default {
  clickTag,
  findAllTags,
  findRenderedNodeForComponent,
  findTag,
  simulateEvent
};
