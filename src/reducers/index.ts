import { combineReducers } from 'redux';
import joke, { JokeState } from './joke';

export interface State {
  joke: JokeState;
}

export default combineReducers({
  joke,
});
