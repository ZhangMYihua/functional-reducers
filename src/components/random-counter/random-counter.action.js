import { RANDOM_COUNTER } from './random-counter.type';
import { createAction } from '../../redux/utils/action-helper';

export const reset = () => createAction(RANDOM_COUNTER.RESET);