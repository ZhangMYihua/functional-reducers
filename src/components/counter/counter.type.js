import { prefixActionTypes } from '../../redux/utils/redux-helper';

export const COUNTER = prefixActionTypes('COUNTER', [
  'INCREMENT',
  'DECREMENT',
  'STORE_VALUE_IN_CACHE',
  'RESTORE_CACHED_VALUE'
]);
