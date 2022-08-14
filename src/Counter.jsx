import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [operator, setOperator] = useState("+");

    const handleCount = () => {
        if(operator === "+") {
            setCount(count + 1);
        }
        if(operator === "-") {
            setCount(count - 1);
        }
        if(operator === "*") {
            setCount(count * count);
        }
        if(operator === "/") {
            setCount(count / count);
        }
    };

    return (
        <div className="box">
            <h3>Your count is: {count}</h3>
            <h3>operator: {operator}</h3>
            <button onClick={handleCount}>Execute</button>
            
            <p>Choose operator:</p>
            <button onClick={()=> setOperator("+")}>Add</button>
            <button onClick={()=> setOperator("-")}>Subtract</button>
            <button onClick={()=> setOperator("*")}>Multiply</button>
            <button onClick={()=> setOperator("/")}>Divide</button>
        </div>
    );
}

export default Counter;