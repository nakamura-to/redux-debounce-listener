import { assert } from 'chai';
import debounceListener from '../src/index';

describe('debounce listener', () => {
  const handler = debounceListener(100);

  it('must return a function to handle createStore', () => {
    assert.isFunction(handler);
    assert.strictEqual(handler.length, 1);
  });

  describe('finalCreateStore', () => {
    it('must replace `subscribe` function', () => {
      const originalStore = {
        subscribe: () => ({}),
      };
      const createStore = (reducer, initialState) => originalStore;
      const finalCreateStore = handler(createStore);
      const store = finalCreateStore(state => state);
      assert.notStrictEqual(originalStore, store);
      assert.notStrictEqual(originalStore.subscribe, store.subscribe);
      assert.isFunction(store.subscribe);
      assert.strictEqual(store.subscribe.length, 1);
    });

    describe('`subscribe`', () => {
      it('must subscribe debounced listeners', done => {
        const listeners = [];
        const originalStore = {
          subscribe: listener => listeners.push(listener),
        };
        const createStore = (reducer, initialState) => originalStore;
        const finalCreateStore = handler(createStore);
        const store = finalCreateStore(state => state);
        let count = 0;
        const tryComplete = () => {
          count++;
          if (count === listeners.length) {
            done();
          }
        };
        store.subscribe(() => tryComplete());
        store.subscribe(() => tryComplete());
        assert.strictEqual(listeners.length, 2);
        listeners.forEach(listener => assert.isFunction(listener.cancel));
        listeners.forEach(listener => listener());
      });
    });
  });
});
