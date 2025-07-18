
import './App.css';

import Usercard  from "./Usercard.js"
import Welcome from "./Welcome.js"
import Map from "./Map.js"
import Render from "./Render.js"
import Hook from "./Hook.js"
function App() {
  
    
  return (
    <>
    
    
    <Welcome name="Charlie"/>
    <Usercard name="Charlie" age={28}/>
    <Welcome name="Allice"/>
    <Usercard name="Allice" age={25}/>
    <Map/>
    <Render/>
    <Hook/>
    
  
    </>  
    
  );
}

export default App;
