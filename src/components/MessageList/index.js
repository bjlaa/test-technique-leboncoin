import React from 'react';
import styles from './MessageList.module.scss';

const MessageList = ({ messages }) => {
	const renderMessages = () => {
		if (!messages) {
			return null;
		}

		const messageNodes = messages.map((message) => {
			return (
				<div key={message.text}>test</div>
			);
		});
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
