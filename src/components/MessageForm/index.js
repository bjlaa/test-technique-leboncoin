import React from 'react';

import styles from './MessageForm.module.scss';

class MessageForm extends React.Component {
	constructor(props) {
		super(props);

		// We create two refs: for the textarea and for the input
		this.textarea = React.createRef();
		this.privateCheckbox = React.createRef();
	}

	// Handles the submit of our form
	handleSubmit = (event) => {
		event.preventDefault();

		// We create our new message object
		const newMessage = {
			text: this.textarea.current.value,
			private: this.privateCheckbox.current.checked
		};

		// And call the createMessage prop passing it newMessage
		this.props.createMessage(newMessage);

		// We reset the value of both the textarea and the input
		this.textarea.current.value = '';
		this.privateCheckbox.current.checked = false;
	};

	render() {
		return (
			<form
				className={styles.messageForm}
				onSubmit={this.handleSubmit}
			>
				<div className={styles.messageForm__text}>
					<textarea
						className={styles.messageForm__text__textarea}
						id="messageForm__text__textarea"
						ref={this.textarea}
						placeholder="Type in your message"
						required
					/>
				</div>
				<div className={styles.messageForm__private}>
					<label
						className={styles.messageForm__private__label}
						htmlFor="messageForm__private__input"
					>
						Private message:
					</label>
					<input
						className={styles.messageForm__private__input}
						type="checkbox"
						id="messageForm__private__input"
						ref={this.privateCheckbox}
					/>
				</div>
				<button
					type="submit"
					className={`${styles.messageForm__submitButton} ${this.props.isCreatingMessage ? 'disabled' : ''}`}
				>
					Send
				</button>
			</form>
		);
	}
}

export default MessageForm;
