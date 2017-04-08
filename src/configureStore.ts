import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers';

const enhancer = compose(applyMiddleware(ReduxThunk), applyMiddleware(ReduxPromise));

export default function configureStore() {
  return createStore(rootReducer, {}, enhancer);
}
