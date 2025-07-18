import React from "react"

function Map(){
    let fruits = ["apple","banana","cherry","orange"]

    return(
        <div style={{textAlign:'center'}}>
        <h1>Fruit List:</h1>
        <ul style={{listStyle:'none'}}>
        {fruits.map((fruits,index)=>(
            <li key={index}>{fruits}</li>
        ))}
        </ul>
        </div>
    )
}
export default Map;