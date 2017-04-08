import React from 'react';
import styles from './styles.scss';

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const Counter = ({ count, increment, decrement }: CounterProps) => (
  <div className={styles.wrapper}>
    <div>{count}</div>
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  </div>
);

export default Counter;
