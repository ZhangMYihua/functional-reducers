import React from 'react';

import './counter.css';

export const Counter = ({
  counter,
  cachedValue,
  increment,
  decrement,
  storeValueInCache,
  restoreCachedValue
}) => (
  <div className="counter">
    <span className="value">
      { counter }
    </span>
    <button onClick={increment}>
      Increment
    </button>
    <button onClick={decrement}>
      Decrement
    </button>
    <button onClick={() => storeValueInCache(counter)}>
      Store ({counter})  In Cache
    </button>
    <button onClick={restoreCachedValue}>
      Restore to ({cachedValue})
    </button>
  </div>
);