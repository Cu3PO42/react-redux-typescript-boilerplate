import React from 'react';
import styles from './styles.scss';

interface JokeProps {
  joke: string;
  loadJoke: () => void;
}

const Joke = ({ joke, loadJoke }: JokeProps) => (
  <div className={styles.main}>
    <p>{joke}</p>
    <button onClick={loadJoke}>Load a new joke</button>
  </div>
);

export default Joke;
