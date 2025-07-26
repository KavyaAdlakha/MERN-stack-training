import React, {useState} from "react";

function Event () {
    //state for managing form input
    const [inputvalue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    //mouse click event handler
    const handleClick = () => {
        alert("button clicked!");
    };

    //keyboard event handler
    const handleKeyDown = (event) => {
        if(event.key === "enter"){
            alert("enter key pressed");
        };
    }

    //form input change handler
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    //form subbmission handler
    const handleSubit = (event) => {
        event.preventDefault();  // prevents the page from reloading
        alert(`form submitted with input ${inputvalue}`)
    }

    //focus and blur event
    const handleFocus = () => {
        setIsFocused(true);
        console.log("Input Focused")
    }

    const handleBlur = () => {
        setIsFocused(false)
        console.log("Input Blured")
    }

    return(
        <div>
            <h1>React Events Example</h1>
            {/* Mouse click event */}
            <button onClick={handleClick} style={{backgroundColor:"lightgreen"}}>Click Me</button>

            {/* Keyboard Event */}
            <input
            type="text"
            placeholder="press Enter"
            onKeyDown={handleKeyDown}
            />

            {/* Form Event */}
            <form onSubmit={handleSubit}>
                <input
                type="text"
                placeholder="Type something ..."
                value={inputvalue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                />
                <button type="submit" style={{backgroundColor:"lightgreen"}}>Submit</button>
            </form>

            {/* Display whether the input is focused */}
            <p>{isFocused? "Input is Focused" : "Input is not Focused"}</p>
        </div>
    )
}

export default Event;