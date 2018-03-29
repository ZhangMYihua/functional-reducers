import React from 'react';

export const Counter = ({counter, increment, decrement}) => (
  <div>
    {counter}
    <button onClick={increment}>
      Increment 
    </button>
    <button onclick={decrement}>
      Decrement
    </button>
  </div>
)
