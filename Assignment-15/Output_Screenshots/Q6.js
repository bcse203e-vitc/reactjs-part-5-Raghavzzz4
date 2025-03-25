import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(0);

  const handleNumberClick = (number) => {
    if (operator === '') {
      setNum1(num1 * 10 + number);
    } else {
      setNum2(num2 * 10 + number);
    }
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
  };

  const handleEqualsClick = () => {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 0;
    }
    setResult(result);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input type="text" value={num1 + operator + num2} readOnly />
      <div>
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button onClick={handleEqualsClick}>=</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
