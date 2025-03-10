import { useState } from "react";

function Counter (){
    
    const [counter, setCount] = useState(0);
    return (

        <div>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
    
        </div>
        
    );
        
    
}