import React, { useState } from 'react';
import './App.css';

import Interval from './components/Interval';
import Average from './components/Average';
import Plus from './components/Plus';
import Sort from './components/Sort';


function App() {

  const [min, setMin] = useState(10);
  const [max, setMax] = useState(20);

  return (
    <div className="App">
      <h1> React-Redux </h1>
      <div className="Line">
          <Interval 
          min={min} 
          max={max}
          onMinChanged={setMin}
          onMaxChanged={setMax}
          />
      </div>
      <div className="Line">
          <Average min={min} max={max}/>
          <Plus min={min} max={max}/>
          <Sort min={min} max={max} />
      </div>
    </div>
  );
}

export default App;
