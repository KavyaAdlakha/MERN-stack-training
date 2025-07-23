import { useMemo, useState } from "react";

function ExpensiveCalculation({number}){
    console.log('expensive calculation running...')


// simulating a expensive calculation
const squaredNumber = number **2;
for (let i=0; i>1000000000; i++){} // just do make it slow

return <p>SquaredNumber: {squaredNumber}</p>
}

function Memo(){
    const [number, setNumber]= useState(0);
    const [counter, setCounter]= useState(0)

    return(
        <div style={{textAlign:'center', border:'1px solid black', margin:'10px', padding:'10px'}}>
            <h1>Without useMemo Example</h1>
            <input
            type="number"
            value={number}
            onChange={(e)=>setNumber(Number(e.target.value))}
            /* you camn take in the place of e here its not compulsory to take e */
            /> 
            <button onClick={()=>setCounter(counter+1)}>Re-render App</button>
            <ExpensiveCalculation number={number}/>
        </div>
    )
}




function ExpensiveCalculation2({number}){
    console.log('expensive calculation running...')


// Using useMemo to memoize the squared value
const squaredNumber = useMemo(()=>{
    console.log("Calculating Square");
    for (let i=0; i>1000000000; i++){} //Simulating Expensive calculation
    return number**2;
}, [number]); //Recompute only if number changes


return <p>SquaredNumber: {squaredNumber}</p>
}

function WithMemo(){
    const [number, setNumber]= useState(0);
    const [counter, setCounter]= useState(0)

    return(
        <div style={{textAlign:'center', border:'1px solid black', margin:'10px', padding:'10px'}}>
            <h1>With useMemo Example</h1>
            <input
            type="number"
            value={number}
            onChange={(e)=>setNumber(Number(e.target.value))}
            /* you camn take in the place of e here its not compulsory to take e */
            /> 
            <button onClick={()=>setCounter(counter+1)}>Re-render App</button>
            <ExpensiveCalculation2 number={number}/>
        </div>
    )
}






export {Memo, WithMemo}