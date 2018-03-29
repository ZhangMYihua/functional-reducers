import { buildReducer } from '../../redux/utils/redux-helper';
import { COUNTER } from './counter.type';

const initialState = () => ({
  counter: 0
});

const increment = (state, action) => ({
  ...state,
  counter: state.counter + 1
});

const decrement = (state, action) => ({
  ...state,
  counter: state.counter === 0 ? 0 : state.counter - 1
});


export default buildReducer(initialState(), {
  [COUNTER.INCREMENT]: increment,
  [COUNTER.DECREMENT]: decrement
});
