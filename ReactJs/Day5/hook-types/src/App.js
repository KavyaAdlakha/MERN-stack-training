
import './App.css';
import CounterReducer from './UseReducer';
import {UseRef} from './UseRef';
import { Mutable } from './UseRef';

function App() {
  return (
    <>
    <CounterReducer/>
    <UseRef/>
    <Mutable/>
    </>
  )

}
export default App;
