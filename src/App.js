import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [count,setCount] = useState(0)
  

  const display =()=>{
   
    if(count<0){
      return "Error";
    }

    if(count===0){
       return 0;
    }

    return count;
  }
  return (
    <div className="App" data-test="component-app">
    <h1 data-test="counter-display">The counter is currently<span data-test="count">{display()}</span></h1>
    <button data-test="increment-button" onClick={()=>setCount(count+1)}>increment</button>
    <button data-test="decrement-button" onClick={()=>setCount(count-1)}>Decrement button</button>
    </div>
  );
}

export default App;
