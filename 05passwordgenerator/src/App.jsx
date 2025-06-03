import { useState } from "react"

function App() {
 const [length, setLength] = useState(8)
 const[numberAllowed , setNumberAllowed] = useState(false);
 const[charAllowed, setCharAllowed] = useState(false);
 const[password, setPassword] = useState("")

 const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(charAllowed) str += "!?`$£€&%@#$^*"
 } , [length, numberAllowed, charAllowed, setPassword])
  for (let i = 1; i < rray.length; i++){
    let char = Math.floor(Math.random()*str.length + 1)
    pass = str.charAt(char)
   
  }
  setPassword(pass)
 

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>

    </div>

    </>
  )
}

export default App
