import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { CCHeader } from './components/header/header';
import { CCBody } from './components/body/body';

function App() {
  return (
    <div className="App">
      <CCHeader/>
      <CCBody/>
    </div>
  );
}

export default App;
