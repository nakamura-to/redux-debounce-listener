Redux Debounce Listener
=============================

A proxy creator for Redux store to debounce listeners.

## Motivation

Redux Debounce Listener allows you to delay invoking listeners.
If you use this with React, rendering cost may be reduced.

## Installation

```sh
npm install --save redux-debounce-listener
```

## Example App

```sh
$ cd example
$ npm install
$ npm start
```

## Examples of Use

### Simple

```js
import { createStore } from 'redux';
import debounceListener from 'redux-debounce-listener'
import rootReducer from './reducers/index';

// create a store that has redux-debounce-listener enabled
const finalCreateStore = debounceListener(50, { 'leading': true })(createStore);

const store = finalCreateStore(rootReducer);
```

### Composition

```js
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import debounceListener from 'redux-debounce-listener'
import rootReducer from './reducers/index';

// create a store that has redux-thunk middleware and dux-debounce-listener enabled
const finalCreateStore = compose(
  applyMiddleware(thunk),
  debounceListener(50, { 'leading': true })
)(createStore)

const store = finalCreateStore(rootReducer);
```

## API

```
debounceListener([wait=0], [options])
```

`wait` and `options` parameters are passed to the lodash debounce function.

See [debounce](https://lodash.com/docs#debounce) for details.

## License

MIT
