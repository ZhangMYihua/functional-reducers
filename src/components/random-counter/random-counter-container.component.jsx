import React from 'react';
import { connect } from 'react-redux';
import {
  createStructuredSelector
} from 'reselect';
import * as R from 'ramda';

import { Counter } from '../counter/counter.component';
import {
  increment,
  decrement,
  storeValueInCache,
  restoreCachedValue
} from '../counter/counter.action';
import { reset } from './random-counter.action';

import './random-counter.css';

const getCounter = R.path(['randomCounter', 'counter']);
const getCachedValue = R.path(['randomCounter', 'cachedValue']);

const mapStateToProps = createStructuredSelector({
  counter: getCounter,
  cachedValue: getCachedValue
});

const mapDispatchToProps = {
  increment: () => increment('random-counter', 5),
  decrement: () => decrement('random-counter', 3),
  storeValueInCache: valueToStore => storeValueInCache('random-counter', valueToStore),
  restoreCachedValue: () => restoreCachedValue('random-counter'),
  reset
};

const randomCounter = (props) => (
  <div className="random-counter">
    <Counter {...props} />
    <button onClick={reset}>reset</button>
  </div>
)

export const RandomCounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(randomCounter);