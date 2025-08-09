import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './components/Result';

const secret=Math.floor(Math.random() *10)+1
function App() {0

  const [typenumber,changeNum]=useState('')
  console.log(typenumber)
  return (
    <div className='container'>
          <div className='head'>
            <label htmlFor='text_input'>Guess the number from 1 to 10</label>
          </div>
          <center><input id='text_input' type='text' onChange={(e)=>{
            changeNum(e.target.value)
          }} /></center>
          <Result secret={secret} guess={typenumber}/>
    </div>
  );
}

export default App;
