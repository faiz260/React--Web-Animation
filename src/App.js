import React from 'react';
import {Navbar} from './Components/navbar';
import {Screen1} from './Components/screen1';
import {Screen2} from './Components/screen2';
import {Screen3} from './Components/screen3';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Screen1/>
      <Screen2/>
      <Screen3/>
    </div>
  );
}

export default App;
