import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [c, setcounter] = useState(15)  //setcounter is a method
  //let c=15

  const addValue=()=>{
    console.log('clicked add', c);
    //c=c+1
    setcounter(c+1);
  }

  const removeValue = ()=>{
    if(c===0)
      return;
    
    console.log('clicked remove', c);
    setcounter(c-1)
  }
  return (
    <>
      <h1>Hello Everyone</h1>
      <h2>Counter value: {c}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
      <p>footer : {c}</p>
    </>
  )
}

export default App
