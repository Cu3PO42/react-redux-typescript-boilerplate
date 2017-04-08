import { connect } from 'react-redux';
import { Store } from '../reducers';
import { incrementCounter, decrementCounter } from '../actions/counter';
import Counter from '../components/Counter';

const mapStateToProps = ({ counter }: Store) => ({ count: counter.count });
const mapDispatchToProps = {
  increment: incrementCounter,
  decrement: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
