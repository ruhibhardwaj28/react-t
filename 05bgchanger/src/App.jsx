

function App() {
 const [color, setColor] = useState("black")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}}
   >
    <div className="fixed flex flex-wrap justify-center buttom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-xxl">
        <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm">
          red</button>
        <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm">
          green</button>
        <button onClick={()=>setColor("white")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm">
          white</button>
       
      </div>
    </div>
   </div>
  )
}

export default App
