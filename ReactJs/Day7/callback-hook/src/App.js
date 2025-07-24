import './App.css';
import { useState, useCallback } from 'react';
import Itemlist from "./UseCallBack"

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  //memoize the selectitem function to prevent re-creation on every render
  const selectItem = useCallback((item) => {
    setSelectedItem(item);
  }, []);

  const items = ["Apple","Banana","Cherry","Orange","Mango"];


  return(
    <div style={{textAlign:"center", border:"1px solid black", margin:"20px"}}>
      <h1>Example of useCallback Hook</h1>
      <hr></hr>
      <h2>Select an Item</h2>
      <p>Selected Item: {selectedItem || "None"}</p>
      <Itemlist items={items} selectItem={selectItem}/>
    </div>
  )
}

export default App;
