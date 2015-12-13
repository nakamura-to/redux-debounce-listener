import debounce from 'lodash.debounce';

export default function debounceListener(wait, options) {
  return createStore => (reducer, initialState) => {
    const store = createStore(reducer, initialState);
    return {
      ...store,
      subscribe: listener => {
        const debounced = debounce(listener, wait, options);
        return store.subscribe(debounced);
      },
    };
  };
}
