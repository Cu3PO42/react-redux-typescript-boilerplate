import handleActions from '../utils/handleActions';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

export interface CounterStore {
  count: number;
}

const initialState: CounterStore = {
  count: 0,
};

// tslint:disable:function-name
export default handleActions({
  [INCREMENT_COUNTER](state, payload) {
    return { 
      ...state,
      count: state.count + 1,
    };
  },
  [DECREMENT_COUNTER](state, payload) {
    return {
      ...state,
      count: state.count - 1,
    };
  },
}, initialState);
