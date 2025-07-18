import React,{useState} from "react"
function Hook(){
    const[count,setCount]=useState(0);  
    return(
    <>
        <h1>Count:{count}</h1>
        <button onClick={()=>(setCount(count+1))}>+</button>
        <button onClick={()=>(setCount(count-1))}>-</button>
        </>
    )
}
export default Hook;