import {ClickCounter} from 'src/click-counter.js';

describe('Click counter', () => {
  it('increases counter', () => {
    let clickCounter = new ClickCounter();
    clickCounter.count = 0;

    clickCounter.increment();

    expect(clickCounter.count).toBe(1);
  });
});
