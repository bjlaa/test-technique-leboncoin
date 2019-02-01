import React from 'react';

import styles from './MessageForm.module.scss';

class MessageForm extends React.Component {
	constructor(props) {
		super(props);

		this.textarea = React.createRef();
		this.privateCheckbox = React.createRef();
	}

	handleSubmit = (event) => {
		event.preventDefault();

		const newMessage = {
			text: this.textarea.value,
			private: this.privateCheckbox.checked
		};

		this.props.createMessage(newMessage);
	};

	render() {
		<form
			className={styles.messageForm}
			onSubmit={handleSubmit}
		>
			<div className={styles.messageForm__text}>
				<label htmlFor="messageForm__text__textarea">
					Type in your message:
				</label>
				<textarea
					className={styles.messageForm__text__textarea}
					name=""
					id="messageForm__text__textarea"
					cols="30"
					rows="10"
					ref={this.textarea}
				/>
			</div>
			<div className={styles.messageForm__private}>
				<label htmlFor="messageForm__private__input">
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
				className={styles.messageForm__submitButton}
			>
				Send
			</button>
		</form>
	}
}

export default MessageForm;
