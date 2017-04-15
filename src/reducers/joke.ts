import handleActions from '../utils/handleActions';
import { LOAD_JOKE, LoadJokeAction } from '../actions/joke';

export interface JokeState {
  joke: string;
}

const initialState: JokeState = { joke: '' };

// tslint:disable:function-name
export default handleActions({
  [LOAD_JOKE](state, { payload }: LoadJokeAction) {
    return {
      ...state,
      joke: payload.joke,
    };
  },
}, initialState);
