import React from 'react';
import logo from './logo.svg';
import './App.css';
import BoxContainer from './BoxContainer'

function App() {
  return (
    <div className="App">
      <BoxContainer numBoxes={18} />
    </div>
  );
}

export default App;
