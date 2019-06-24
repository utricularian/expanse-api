import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';

import Input from 'components/widgets/Input';

import DOM from '../../testHelpers/dom';

describe("Input", () => {
  let input, inputNode, inputDOMElement;
  let changeCallback, submitCallback;

  beforeEach(() => {
    changeCallback = jest.fn();
    submitCallback = jest.fn();

    input = TestUtils.renderIntoDocument(
      <Input label={"Hello World"} value={"something old"} changeCallback={changeCallback} submitCallback={submitCallback} />
    );
    inputNode = ReactDOM.findDOMNode(input);
    inputDOMElement = DOM.findTag(input, 'input');
  });

  it('renders with the correct label', () => {
    expect(inputNode.textContent).toMatch(/Hello World/);
  });

  it('updates input value with changed value', () => {
    expect(inputDOMElement.value).toEqual("something old");

    DOM.simulateEvent(inputDOMElement, 'change', {target: {value: 'something new'}});

    expect(inputDOMElement.value).toEqual("something new");
  });

  it('sends the updated value through the changeCallback', () => {
    expect(changeCallback).toHaveBeenCalledTimes(0);

    DOM.simulateEvent(inputDOMElement, 'change', {target: {value: 'something new'}});

    expect(changeCallback).toHaveBeenCalledTimes(1);
  });

  it('calls the submitCallback if the user hit Enter', () => {
    expect(submitCallback).toHaveBeenCalledTimes(0);

    DOM.simulateEvent(inputDOMElement, 'keyDown', {key: 'Enter', keyCode: 13, which: 13})

    expect(submitCallback).toHaveBeenCalledTimes(1);
  });

  describe("when there is no submitCallback", () => {
    beforeEach(() => {
      input = TestUtils.renderIntoDocument(
        <Input label={"Hello World"} value={"something old"} changeCallback={changeCallback} />
      );
      inputNode = ReactDOM.findDOMNode(input);
      inputDOMElement = DOM.findTag(input, 'input');
    });

    it('does nothing (and does not break)', () => {
      expect(submitCallback).toHaveBeenCalledTimes(0);

      DOM.simulateEvent(inputDOMElement, 'keyDown', {key: 'Enter', keyCode: 13, which: 13})

      expect(submitCallback).toHaveBeenCalledTimes(0);
    });
  });
});
