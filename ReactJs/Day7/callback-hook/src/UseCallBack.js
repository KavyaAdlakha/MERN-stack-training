import React from "react";

function Itemlist({items, selectItem}) {
    console.log("Itemlist re-rendered");

   return(
    <ul style={{listStyle: 'none', padding: 0, textAlign:"center"}}>
        {items.map((item, index) =>(
            <li key={index}>
                {item} &nbsp;&nbsp; <button onClick={() => selectItem(item)}>Select</button>
            </li>
        ))}
    </ul>
   )    
}

// React.memo prevents re-rendering unless props change
export default React.memo(Itemlist);
