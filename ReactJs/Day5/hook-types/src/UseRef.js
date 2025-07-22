import { useRef, useState } from "react";

 function UseRef() {

    const inputRef = useRef(null);
    // inputRef is created with useRef(null) meaning it initially points to null.

    const handleFocus = ()=>{
        inputRef.current.focus();
        // use .current to acess the DOM node and focus it
    }

    return(
        <div style={{textAlign:'center', border:'1px solid black', margin:'10px', padding:'10px'}}>
            <h1>Acessing DOM Element with useRef</h1>
            <input ref={inputRef} type="text" placeholder="Click button to focus"/>
            {/* ref={inputRef} connects inputRef to the input element. after the initial  render, inputRef.current holds the reffrence to this DOM element. */}
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    )
}





function Mutable() {

    const clickCounterRef = useRef(0)
    const[renderCount, setRenderCount] = useState(0)

    const handleClick = ()=>{
        clickCounterRef.current +=1;
        console.log(`Button clicked ${clickCounterRef} times`)
    }

    const reRender = ()=>setRenderCount(renderCount+1)

    return(
        <div style={{textAlign:'center', border:'1px solid black', margin:'10px', padding:'10px'}}>
            <h1>Using useRef for mutable values</h1>
            <button onClick={handleClick}>ClickMe</button>
            <button onClick={reRender}>Re-render</button>
            <p>Click Count(in console only): {clickCounterRef.current}</p>
            <p>Render Count: {renderCount}</p>
        </div>
    )
}

export{UseRef, Mutable}
