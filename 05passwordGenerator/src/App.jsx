import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [len, setlen] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
     if(numberAllowed) str += "0123456789"
     if(charAllowed) str += "!@#$%^&*_+=[]{}~`"
    
     for(let i=1; i<=len; i++){
        let char = Math.floor(Math.random() * str.length + 1)

        pass += str.charAt(char)
     }

     setPassword(pass)

  },[len, numberAllowed, charAllowed, setPassword])
  
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
      passwordGenerator()
  },[len, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h2 className='text-white text-center text-3xl mb-4'>Password Generator</h2>
        <div className="flex shadow rounded-lg
        overflow-hidden mb-4">
            <input type="text" 
             value={password}
             className='outline-none w-full py-1 px-3 bg-white'
             placeholder='PassWord'
             readOnly
             ref={passwordRef}
            />
            <button 
            className='outline-none bg-blue-500 text-black px-3 py-1 shrink-0'
            onClick={copyPasswordToClipboard}>
              Copy
            </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={len}
              className='cursor-pointer'
              onChange={(e)=>{setlen(e.target.value)}}
            />
            <label >Length: {len}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={()=>{
                  setnumberAllowed((prev)=> !prev)
                }}
              />
              <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                defaultChecked={charAllowed}
                id='charInput'
                onChange={()=>{
                  setcharAllowed((prev)=> !prev)
                }}
              />
              <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


/*useCallback: it is a React hook that returns a memoized version of a 
 callback function. It is useful when you want to avoid unnecessary 
 re-creations of functions  that are passed as props to child 
 components or used as dependencies in useEffect or useMemo.
(By using useCallback, you ensure that the function is only 
re-created when one of its dependencies changes,)

useEffect is a React hook that allows you to perform side 
effects in your function components. 
The first argument is a function that contains the code you want to run.
The second argument is an array of dependencies, which determines when the effect should run.

useRef is a React hook that provides a way to access and persist mutable values across renders
without triggering a re-render. It can also be used to directly access a DOM element.
*/