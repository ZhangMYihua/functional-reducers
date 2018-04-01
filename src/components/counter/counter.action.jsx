import { createAction } from '../../redux/utils/action-helper';
import { COUNTER } from './counter.type';

export const increment = (counterId, number) => createAction(COUNTER.INCREMENT, {counterId, number});
export const decrement = (counterId, number) => createAction(COUNTER.DECREMENT, { counterId, number});
export const storeValueInCache = (counterId, value) => createAction(COUNTER.STORE_VALUE_IN_CACHE, {counterId, value});
export const restoreCachedValue = counterId => createAction(COUNTER.RESTORE_CACHED_VALUE, {counterId});