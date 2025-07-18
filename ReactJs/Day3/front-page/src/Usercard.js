import React from 'react';

function Usercard({name,age}){
    return(
        <div style={{border:'1px solid black', padding:'5px', marginBottom:'10px', textAlign:'center'}}>
        <h2>{name}</h2>
        <p>Age:{age}</p>
        </div>
        
    )
}
export default Usercard;