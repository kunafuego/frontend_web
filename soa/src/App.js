import logo from './logo.svg';
import React from 'react'
import Barra from './components/about'
import './App.css';
import Routing from './Routing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routing></Routing>
      </header>
    </div>
  );
}

export default App;
