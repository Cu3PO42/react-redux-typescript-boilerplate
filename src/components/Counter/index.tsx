import React from 'react';

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const Counter = ({ count, increment, decrement }: CounterProps) => (
  <div>
    <div>{count}</div>
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  </div>
);

export default Counter;
