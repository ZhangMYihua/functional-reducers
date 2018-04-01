import { COUNTER } from './counter.type';

const increment = counterId => 
  (state, { type, payload }) =>
    payload.counterId === counterId
    ? { ...state, counter: state.counter + payload.number }
    : state;

const decrement = counterId => 
  (state, { type, payload }) =>
    payload.counterId === counterId
    ? { ...state, counter: state.counter === 0 ? 0 : state.counter - payload.number }
    : state;

const restoreCachedValue = counterId =>
  (state, { type, payload }) =>
    payload.counterId === counterId
    ? { ...state, counter: state.cachedValue }
    : state;

const storeValueInCache = counterId =>
  (state, { type, payload }) => 
    payload.counterId === counterId
    ? { ...state, cachedValue: payload.value }
    : state;

export const createCounterReducerCases = counterId => (reducerCases = {}) => ({
  ...reducerCases,
  [COUNTER.INCREMENT]: increment(counterId),
  [COUNTER.DECREMENT]: decrement(counterId),
  [COUNTER.RESTORE_CACHED_VALUE]: restoreCachedValue(counterId),
  [COUNTER.STORE_VALUE_IN_CACHE]: storeValueInCache(counterId)
});
