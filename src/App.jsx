import React, { useState } from 'react'
import "./App.scss"
const App = () => {
  const [result,setResult] =useState("");
  const Click =(e)=>{
    setResult(result.concat(e.target.name));
  }
  const Clear =()=>{
    setResult("");
  }
  const BackSpace =()=>{
    setResult(result.slice(0,-1));
  }
  const Result =(e)=>{
    e.preventDefault();
    try{
    setResult(eval(result).toString())
    }catch(err){
      setResult("Error");
    }
  }

  return (
   <>
   <nav>
    <h1>Calculator</h1>
   </nav>
   <div className="con">
    <form onSubmit={Result} action="">
    <input placeholder='Type here...' onInput={(e)=>{setResult(e.target.value)}} type="text" value={result} name="input" id="" />
    </form>
    <div className="key">
      <button onClick={Clear} style={{gridColumn:"span 2",backgroundColor:"#238636"}}>Clear</button>
      <button className="material-symbols-outlined" onClick={BackSpace} style={{backgroundColor:"#238636"}}>backspace</button>
      <button name="/"  onClick={Click} style={{backgroundColor:"#238636"}}> &divide;</button>
      <button name="7" onClick={Click}> 7</button>
      <button name="8" onClick={Click} >8</button>
      <button name="9" onClick={Click}> 9</button>
      <button name="*" style={{backgroundColor:"#238636"}}  onClick={Click} >&times;</button>
      <button name="4" onClick={Click} >4</button>
      <button name="5" onClick={Click} >5</button>
      <button name="6" onClick={Click} >6</button>
      <button name="-" style={{backgroundColor:"#238636"}}  onClick={Click} >-</button>
      <button name="1" onClick={Click} >1</button>
      <button name="2" onClick={Click} >2</button>
      <button name="3" onClick={Click} >3</button>
      <button name='+' style={{backgroundColor:"#238636"}} onClick={Click} >+</button>
      <button name="0" onClick={Click} >0</button>
      <button name="." onClick={Click} >.</button>
      <button onClick={Result} style={{gridColumn:"span 2",backgroundColor:"#238636"}}>=</button>
    </div>
   </div>
   </>
  )
}

export default App
