import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';


function MyApp(){
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const reactElement= {
//   type:'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click to visite google'
// }


const reactElement = React.createElement(
  'a',
  {href:'https:\\google.com', target:'_blank'},
  'click here to go to login '

)


const anotherElement = (
  <a href="https:\\google.com" target='_blank'>Visit Google</a>
)

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  reactElement
  
)
