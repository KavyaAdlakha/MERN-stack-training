import { createContext,useContext, useState } from "react";



// create a ThemeContext with "light" as default value.
const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light");

    // toggle theme between "light" nad "dark"

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
 

function ThemedComponent(){
    //Access the theme and toggleTheme from ThemeContext
    const {theme, toggleTheme} = useContext(ThemeContext);

    const themeStyles={
        padding: "20px",
        backgroundColor: theme==='dark' ? '#333' : '#fff',
        color: theme==='dark' ? '#fff' : '#333',
        borderRadius: '5px',
        textAlign: 'center'
    }

    return(
        <div style={themeStyles}>
            <h1>Themed Component</h1>
            <p>The current theme is <strong>{theme}</strong></p>
            <button onClick={toggleTheme}>Toggle to {theme==='light' ? 'dark': 'light'} theme.</button>
        </div>  
    )
}



export default function UseContext() {
    return(
        <ThemeProvider>
        <div style={{textAlign:'center'}}>
            <h1>useContext Theme Toggle Example </h1>
            <ThemedComponent/>
        </div>
        </ThemeProvider>
    ) 
}