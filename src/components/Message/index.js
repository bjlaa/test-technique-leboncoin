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
				?
					<div className={`${styles.message__private} message__private`}>This message was made private by the user.</div>
				:
					<span>{message.text}</span>
			}
		</div>
	);
}

export default Message;
