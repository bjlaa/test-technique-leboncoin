import React from 'react';

import styles from './Message.module.scss';

const Message = ({ message }) => {
	if (!message) {
		return null;
	}

	return (
		<div className={styles.message}>
			{
				message.private
				// If the message is private we show the default template message
				?
					<div className={`${styles.message__private} message__private`}>&#128274; This message was made private by the user.</div>
				:
					// Otherwise we show the text
					<span>{message.text}</span>
			}
		</div>
	);
}

export default Message;
