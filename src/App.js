
import './App.css';
import React,{useState} from 'react';
import Luhn from './components/Luhn';

function App() {
  return (
    <div className="App">
      <h3 id='message'>Enter your card number below. I promise I won't steal your identity</h3>
  <Luhn></Luhn>
    </div>
  );
}

export default App;
