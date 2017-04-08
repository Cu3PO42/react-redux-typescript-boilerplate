import { combineReducers } from 'redux';
import counter, { CounterStore } from './counter';

export interface Store {
  counter: CounterStore;
}

export default combineReducers({
  counter,
});
