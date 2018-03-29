import { prefixActionTypes } from '../../redux/utils/redux-helper';

export const COUNTER = prefixActionTypes('COUNTER', [
  'INCREMENT',
  'DECREMENT',
  'CACHE_VALUE'
]);
