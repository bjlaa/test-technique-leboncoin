import React, { Component } from 'react';
import styles from './App.module.scss';

import Card from '../Card';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.app__header}>
          Test technique LeBonCoin
        </header>
        <Card>
          <div>test</div>
        </Card>
      </div>
    );
  }
}

export default App;
