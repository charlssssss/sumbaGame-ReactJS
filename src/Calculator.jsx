import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState("+");

    const handleChangeNum1 = (event) => {
        setNum1(event.target.value);
    };

    const handleChangeNum2 = (event) => {
        setNum2(event.target.value);
    };

    const handleNum = () => {
        if(operator === "+") {
            setResult(parseInt(num1) + parseInt(num2));
        }
        if(operator === "-") {
            setResult(parseInt(num1) - parseInt(num2));
        }
        if(operator === "*") {
            setResult(parseInt(num1) * parseInt(num2));
        }
        if(operator === "/") {
            setResult(parseInt(num1) / parseInt(num2));
        }
    };

    return (
        <div className="box">
            <h3>Calculator</h3>
            <input type="text" name="num1" onChange={handleChangeNum1} value={num1}/><br />
            <input type="text" name="num2" onChange={handleChangeNum2} value={num2}/><br />
            <button onClick={handleNum}>Execute ({operator})</button>

            <p>Chosen operator: {operator}</p>
            <button onClick={()=> setOperator("+")}>Add (+)</button>
            <button onClick={()=> setOperator("-")}>Subtract (-)</button>
            <button onClick={()=> setOperator("*")}>Multiply (*)</button>
            <button onClick={()=> setOperator("/")}>Divide (/)</button>

            <h4>Result: {result}</h4>
        </div>
    );
}

export default Calculator;