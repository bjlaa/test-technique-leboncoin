import React, { Component } from 'react';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.app__header}>
          Test technique LeBonCoin
        </header>
      </div>
    );
  }
}

export default App;
