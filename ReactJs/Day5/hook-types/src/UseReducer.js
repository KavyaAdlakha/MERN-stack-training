import {useReducer} from 'react';

function reducer (state, action) {
    switch(action.type){
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return{ count: state.count - 1};
        default:
          throw new Error();        
    }
}

export default function CounterReducer() {
    const [state, dispatch]= useReducer(reducer,{count:0});

    return(
        <div style={{textAlign:'center', border:'1px solid black', margin:'10px', padding:'10px'}}>
            <h1>Example of useReducer</h1>
            <p>Count: {state.count}</p>
            <button onClick={()=> dispatch({type: 'increment'})}>Increment</button>
            <button onClick={()=> dispatch({type: 'decrement'})}>Decrement</button>
        
        </div>
    )
}