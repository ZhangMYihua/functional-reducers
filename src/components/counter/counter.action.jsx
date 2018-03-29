import { createAction } from '../../redux/utils/action-helper';
import { COUNTER } from './counter.type';

export const increment = () => createAction(COUNTER.INCREMENT);
export const decrement = () => createAction(COUNTER.DECREMENT);
export const cacheValue = value => createAction(COUNTER.CACHE_VALUE, value);