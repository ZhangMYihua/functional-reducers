import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { SimpleCounterContainer } from './components/simple-counter/simple-counter-container.component';
import { EvenCounterContainer } from './components/even-counter/event-counter-container.component';
import { RandomCounterContainer } from './components/random-counter/random-counter-container.component';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      
      Counter:
      <SimpleCounterContainer />

      Even Counter: 
      <EvenCounterContainer />

      Random Counter:
      <RandomCounterContainer />

    </div>
  </Provider>
);

export default App;
