import React from 'react';
import './App.css';

import Interval from './components/Interval';
import Average from './components/Average';
import Plus from './components/Plus';
import Sort from './components/Sort';


function App() {

  return (
    <div className="App">
      <h1> React-Redux </h1>
      <div className="Line">
          <Interval />
      </div>
      <div className="Line">
          <Average />
          <Plus />
          <Sort />
      </div>
    </div>
  );
}

export default App;
