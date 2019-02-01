import React, { Component } from 'react';
import styles from './App.module.scss';

import Card from '../Card';
import MessageList from '../MessageList';
import MessageForm from '../MessageForm';

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

  createMessage = (message) => {
    console.log("boje", message)
    fetch(
      SETTINGS.createMessageURL,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.text();
        }

        throw new Error('Error in App - createMessage(): error while fetching data');
      })
      .then(() => {
        this.fetchMessages();
      })
  };

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.app__header}>
          Test technique LeBonCoin
        </header>
        <Card>
          <MessageList messages={this.state.messages} />
          <MessageForm createMessage={this.createMessage} />
        </Card>
      </div>
    );
  }
}

export default App;
