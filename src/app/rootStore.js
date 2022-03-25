import thunkMiddleware from 'redux-thunk';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

import appReducer from 'src/store/app';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) ||
  compose;

const rootReducer = combineReducers({
  // reducerName: reducer
  app: appReducer,
});

export const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);
