// src/components/CounterPage.js
import React from 'react';
import useCounter from './useCounter';

function CounterPage() {
  const { count, increment, decrement, reset, setValue } = useCounter();

  return (
    <div>
      <h1>Custom Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <input type="number" value={count} onChange={(e) => setValue(Number(e.target.value))} />
    </div>
  );
}

export default CounterPage;
