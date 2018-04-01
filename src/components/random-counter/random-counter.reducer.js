import { buildReducer } from '../../redux/utils/redux-helper';
import { createCounterReducerCases } from '../counter/counter-reducer-helper';

const initialState = () => ({
  counterId: 'random-counter',
  counter: 0,
  cachedValue: 0
});

const reset = state => ({
  ...state, counter: 0 
});

export default buildReducer(initialState(), createCounterReducerCases('random-counter')({reset}));
