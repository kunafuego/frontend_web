import React, { useState } from 'react'
import './App.css';
import './index.css';
import './simulacion.css';
import './forms.css';
import Routing from './Routing';
import axios from 'axios';

axios.defaults.withCredentials = true

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
