import { buildReducer } from '../../redux/utils/redux-helper';
import { createCounterReducerCases } from '../counter/counter-reducer-helper';

const initialState = () => ({
  counterId: 'even-counter',
  counter: 0,
  cachedValue: 0
});

export default buildReducer(initialState(), createCounterReducerCases('even-counter')());
