import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home';
import JokeContainer from '../../containers/JokeContainer';
import styles from './styles.scss';

export default () => (
  <div className={styles.main}>
    <nav>
      <span><Link to="/">Home</Link></span>
      <span><Link to="/joke">Jokes</Link></span>
    </nav>
    <Route exact path="/" render={() => <Home />} />
    <Route exact path="/joke" render={() => <JokeContainer />} />
  </div>
);

