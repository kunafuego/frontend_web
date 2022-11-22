import React, { useState } from 'react'
import './App.css';
import './index.css';
import './simulacion.css';
import './forms.css';
import Routing from './Routing';
import axios from 'axios';
import Landing from './components/landing'; 

axios.defaults.withCredentials = true

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <Route index element={<Landing/>} />
        <Route path='*' element={<Landing/>} />
        <Routing></Routing>
      </header>
    </div>
  );
}

export default App;
