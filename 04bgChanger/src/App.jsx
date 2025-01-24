import { useState } from "react"


function App() {
  
  const [color, setColor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center
      bottom-20 inset-x-20">
        <div className="flex flex-wrap justify-center gap-3
        shadow-lg bg-white rounded-2xl px-2 py-2">
          <button onClick={()=>setColor('red')} // Here we take () : callback function. Otherwise it work on time of rendering
          className="outline-none px-4 rounded-full text-white"
          style={{backgroundColor: 'red'}}>Red
          </button>
          <button onClick={()=>setColor('green')}
          className="outline-none px-4 rounded-full text-white"
          style={{backgroundColor: 'green'}}>Green
          </button>
          <button onClick={()=>setColor('blue')}
          className="outline-none px-4 rounded-full text-white"
          style={{backgroundColor: 'blue'}}>Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
