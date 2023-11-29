import { useState } from "react"



function MyApp() {
    
  let [items, setItem] = useState(0) // 

  const addvalue = () => {
    if(items < 20){
        setItem(items + 1)
    }
    else{
        setItem(20)
    }
  }

  const Removevalue = () => {
    if(items <= 0) {
        setItem(0) 
    }
    else{
        setItem(items - 1)}
    }

  return (

    <div>
        <button onClick={addvalue} style={{borderColor: "red"}}>+</button>
        <h2>{items}</h2>
        <button onClick={Removevalue} style={{borderColor: "red"}}>-</button>
    </div>

    
  )
  
}
export default MyApp