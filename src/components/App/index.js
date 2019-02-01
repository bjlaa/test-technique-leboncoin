import React, { Component } from 'react';
import styles from './App.module.scss';

import Card from '../Card';
import MessageList from '../MessageList';
import MessageForm from '../MessageForm';

import SETTINGS from '../../settings';

class App extends Component {
  state = {
    messages: [],
    isCreatingMessage: false
  };

  // Fetch the messages when the component is successfully mounted
  componentDidMount() {
    this.fetchMessages();
  }

  // Handles fetching our messages
  fetchMessages = () => {
    fetch(SETTINGS.fetchMessagesURL, { mode: 'cors' })
    .then(response => response.json())
    .then((responseParsed) => {
      // Once fetched we save them in our state
      this.setState({ messages: responseParsed });
    })
    .catch((error) => {
      console.log('ERROR in App - fetchMessages(): error ===', error);
    });
  };

  // Handles creating a message
  createMessage = (message) => {
    // Sets isCreatingMessage to true to disable the submit button
    // while the fetching is done
    this.setState({ isCreatingMessage: true });

    // We post our message
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
          // Success. We fetch the list of messages and enable the submit button
          this.fetchMessages();
          this.setState({ isCreatingMessage: false });
        }

        // Else we throw an error for the .catch to catch
        throw new Error('error while fetching data');
      })
      .catch((error) => {
        console.log('ERROR in App - createMessage(): error ===', error);
      });
  };

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.app__header}>
          Test technique LeBonCoin
        </header>
        <Card>
          <MessageList messages={this.state.messages} />
          <MessageForm
            createMessage={this.createMessage}
            isCreatingMessage={this.state.isCreatingMessage}
          />
        </Card>
      </div>
    );
  }
}

export default App;
