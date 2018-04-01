import { prefixActionTypes } from '../../redux/utils/redux-helper';

export const RANDOM_COUNTER = prefixActionTypes('RANDOM_COUNTER', [
  'RESET'
]);
