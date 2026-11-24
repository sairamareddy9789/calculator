import { useState } from 'react';

function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // Calculator state
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  // Calculator functions
  const calculate = (operator) => {
    const a = Number(num1);
    const b = Number(num2);

    if (operator === '+') setResult(a + b);
    else if (operator === '-') setResult(a - b);
    else if (operator === '*') setResult(a * b);
    else if (operator === '/') {
      setResult(b !== 0 ? a / b : 'Cannot divide by zero');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Counter</h2>
      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      <h2>Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => calculate('+')}>+</button>
      <button onClick={() => calculate('-')}>-</button>
      <button onClick={() => calculate('*')}>×</button>
      <button onClick={() => calculate('/')}>÷</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;