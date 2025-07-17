import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// const name = "abhishek";
const a = "hello";
const b = "from";
const c = "abhishek";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <h1>Hello from,{name}</h1>  // expression in jsx
  // <h1>{`${a} ${b} ${c}`}</h1>    // template literals in jsx
  <>
  {/* <h1 contentEditable='true'>Hellooooo</h1> */}
  <h1 className='hey'>Hello from jsx</h1>
  </>
  
)