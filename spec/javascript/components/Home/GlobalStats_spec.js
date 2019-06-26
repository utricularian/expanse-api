import React from 'react';
import * as TestUtils from 'react-dom/test-utils';

import GlobalStats from 'components/Home/GlobalStats';
import MockSystemsStore from '../../mocks/stores/MockSystemsStore';

import SystemFactory from '../../factories/SystemFactory';
import DOM from '../../testHelpers/dom';

describe('GlobalStats', () => {
  let system1, system2;

  beforeEach(() => {
    system1 = SystemFactory.createSystem();
    system2 = SystemFactory.createSystem();
  });

  it('displays the current number of systems', async () => {
    const systemsStore = new MockSystemsStore({ mockData: [system1, system2] });
    const closeCallback = jest.fn();
    const stats = TestUtils.renderIntoDocument(
      <GlobalStats systemsStore={systemsStore} closeCallback={closeCallback} />
    );
    const statsDiv = DOM.findAllTags(stats, 'div')[0];

    await systemsStore.findAllPromise();

    expect(statsDiv.textContent).toMatch(/Number of Systems: 2/);
  });
});
