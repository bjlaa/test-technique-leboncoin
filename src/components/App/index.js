import React, { Component } from 'react';
import styles from './App.module.scss';

import Card from '../Card';
import MessageList from '../MessageList';

import SETTINGS from '../../settings';

class App extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    fetch(SETTINGS.fetchMessagesURL, { mode: 'cors' })
    .then(response => response.json())
    .then((responseParsed) => {
      this.setState({ messages: responseParsed });
    })
    .catch((error) => {
      console.log('ERROR in App - fetchMessages(): error:', error);
    });
  };

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.app__header}>
          Test technique LeBonCoin
        </header>
        <Card>
          <MessageList />
        </Card>
      </div>
    );
  }
}

export default App;
