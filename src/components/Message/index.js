import React from 'react';

import styles from './Message.module.scss';

const Message = ({ message }) => {
	if (!message) {
		return null;
	}

	return (
		<div className={styles.message}>
			<span>{message.text}</span>
			{
				// If the message is private we show the default template message
				(message.private)
				&& <div className={`${styles.message__private} message__private`}>&#128274; Private message: Only you can see that.</div>
			}
			
		</div>
	);
}

export default Message;
