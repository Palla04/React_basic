import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userN: 'Raju',
    age: 21
  }
  let newArray = [1,2,3,4]

  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl'>Tailwind Test
      </h1>
      <Card hi='Earth' someObj={myObj} arr={newArray}/>
      <Card hi='Universe'/>
    </>
  )
}

export default App