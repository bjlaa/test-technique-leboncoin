import React from 'react';
import PropTypes from 'prop-types';

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
				&& (
					<div className={`${styles.message__private} message__private`}>
						<span aria-label="A locked cadenas" role="img">&#128274;</span>
						Private message: Only you can see that.
					</div>
				)
			}
			
		</div>
	);
};

Message.propTypes = {
	message: PropTypes.shape({
		id: PropTypes.number,
		text: PropTypes.string,
		private: PropTypes.bool
	})
}

export default Message;
