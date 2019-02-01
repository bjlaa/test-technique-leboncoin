import React from 'react';

import styles from './MessageList.module.scss';

import Message from '../Message';

const MessageList = ({ messages }) => {
	const renderMessages = () => {
		if (!messages) {
			return null;
		}

		const messageNodes = messages.map((message) => {
			return <Message message={message} key={`${message.id}-${message.text}`} />;
		});

		return messageNodes;
	};

	return (
		<div className={styles.messageList}>
			{
				(messages)
				&& renderMessages()
			}
		</div>
	);
};

export default MessageList;
