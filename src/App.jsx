import {useState} from "react"
function App() {
  const [color, setColor] = useState("Olive")

  return (
    
    <div className=" w-full h-screen duration-200" style={{backgroundColor:color}}>
      
   <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0
    px-2">
      <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white p-4 rounded-3xl">
        <button className=" outline-none p-4 bg-red-500 rounded-3xl" onClick={() => setColor("Red")}>Red</button>
        <button className=" outline-none p-4 bg-green-500 rounded-3xl" onClick={() => setColor("Green")}>Green</button>
        <button className=" outline-none p-4 bg-blue-500 rounded-3xl" onClick={() => setColor("Blue")}>Blue</button>
        <button className=" outline-none p-4 bg-yellow-500 rounded-3xl" onClick={() => setColor("Yellow")}>Yellow</button>
        <button className=" outline-none p-4  bg-black rounded-3xl text-white" onClick={() => setColor("Black")}>Black</button>
        
      </div>

   </div>
</div>
   
  )
}

export default App
