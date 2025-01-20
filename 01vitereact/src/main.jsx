import React from 'react';
import ReactDOM from 'react-dom/client';
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Hello from './Hello.jsx'

/*const reactElement = {
  type: 'a',
  props:{
      href: 'https://google.com',      
      target: '_blank'
  },
  children: 'Click me to visit google'
}*/ //While this object looks similar to a React element, 
// it lacks the internal React properties and prototype that 
// make it invalid for React to render     


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)


const UserN = " Sister Nivedita University"
const reactElement = React.createElement(
   'a',
   {href: 'https://google.com',target: '_blank'},
   'click me if you want to visit',
    UserN
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {reactElement}
    <App />
  </>
    
    
)
