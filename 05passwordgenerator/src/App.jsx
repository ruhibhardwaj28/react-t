import { useState , useCallback, useEffect, useRef } from "react"

function App() {
 const [length, setLength] = useState(8)
 const[numberAllowed , setNumberAllowed] = useState(false);
 const[charAllowed] = useState(false);
 const[password, setPassword] = useState("")

//useRef Hook
const passwordRef = useRef(null)




 const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(charAllowed) str += "!?`$£€&%@#$^*"
  for (let i = 1; i <= length; i++){
    let char = Math.floor(Math.random()*str.length + 1)
    pass += str.charAt(char)
   
  }
  setPassword(pass)
 } , [length, numberAllowed, charAllowed, setPassword])

 const copyPasswordToClipboard = useCallback(()=> {
   passwordRef.current?.select();
   passwordRef.current?.setSelectionRange(0,3);
  window.navigator.clipboard.writeText(password)
 },[password])

 useEffect (() => {passwordGenerator ()} , [length, numberAllowed, charAllowed, passwordGenerator])


  
 

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <div className="flex shadow rounded-lg overflow-hidden md-4">
        <input 
        type="text" 
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
        ref = {passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy </button>

      </div>
      <div className="flex text-sm gap-x-2 ">
        <div className="flex items-center gap-x-1">
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label >length : {length}</label>

        </div>
        <div className="flex item-center gap-x-1">
          <input 
          type="checkbox" 
          defaultChecked = {numberAllowed}
          id="numberinput"
          onChange={()=>{
            setNumberAllowed((prev) => !prev)
          }}

          />
          <label htmlFor="numberInput"> Number</label>



          <div className="flex item-center gap-x-1">
             <input 
          type="checkbox" 
          defaultChecked = {charAllowed}
          id="characterinput"
          onChange={()=>{
            setNumberAllowed((prev) => !prev)
          }}

          />
          <label htmlFor="characterInput"> Character</label>
          </div>

        </div>

      </div>

    </div>

    </>
  )
}

export default App
