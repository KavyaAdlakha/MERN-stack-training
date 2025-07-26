import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductPage from './Navigate/ProductPage';
import CartPage from './Navigate/CardPage';
import Event from './Events';

function App() {
  return(
  <div>
    <div style={{textAlign:"center", border: "2px solid black", margin:"20px" }}>
    <Router>
      <Routes>
        <Route path='/' element={<ProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </Router>
    </div>
    <div style={{textAlign:"center", border: "2px solid black", margin:"20px" }}>
   <Event/>
   </div>
  </div>
  ) 
}

export default App;
