import React from 'react';
import styles from './MessageList.module.scss';

const MessageList = ({ messages }) => {
	console.log(messages)
	const renderMessages = () => {
		if (!messages) {
			return null;
		}

		const messageNodes = messages.map((message) => {
			return (
				<div key={`${message.id}-${message.text}`}>test</div>
			);
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
