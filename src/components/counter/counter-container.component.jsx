import { connect } from 'react-redux';

import { counter } from './counter.component';
import { increment, decrement } from './counter.action';

const mapStateToProps = ({ counter }) => ({
  counter
});

mapDispatchToProps = dispatch({
  increment: dispatch(increment()),
  decrement: dispatch(decrement())
});

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(counter);