import { connect } from 'react-redux';
import { loadJoke } from '../actions/joke';
import { State } from '../reducers';
import Joke from '../components/Joke';

const mapStateToProps = (state: State) => state.joke;
const mapDispatchToProps = ({ loadJoke });

export default connect(mapStateToProps, mapDispatchToProps)(Joke);
