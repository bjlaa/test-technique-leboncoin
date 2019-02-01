import React from 'react';

import styles from './MessageList.module.scss';

import Message from '../Message';

class MessageList extends React.Component {
	constructor(props) {
		super(props);

		this.list = React.createRef();
	}

	// When the component is updated, scroll to the bottom
	// typically when a new message is created
	componentDidUpdate() {
		this.list.current.scrollTop = this.list.current.scrollHeight;
	}

	// Render method iterates over our this.props.messages array
	// to create the Message components
	renderMessages = () => {
		if (!this.props.messages) {
			return null;
		}

		const messageNodes = this.props.messages.map((message) => {
			return <Message message={message} key={`${message.id}-${message.text}`} />;
		});

		return messageNodes;
	};

	render() {
		return (
			<div
				ref={this.list}
				className={styles.messageList}
			>
				{
					(this.props.messages)
					&& this.renderMessages()
				}
			</div>
		);		
	}
};

export default MessageList;
