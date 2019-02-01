import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Message from './index';

configure({ adapter: new Adapter() });

describe('Message', () => {
	const messageText = 'test';
	const message = { id: 0, text: messageText };

	it('should match its snapshot', () => {
		const component = renderer.create(<Message />);

		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should show the message passed via the message prop', () => {
		const component = shallow(<Message message={message} />);

		expect(component.find('span').text()).toEqual(messageText);
	});

	it('should should show a div bearing the private id if the message is private', () => {
		message.private = true;

		const component = shallow(<Message message={message} />);

		expect(component.find('.message__private').length).toEqual(1);
	});
});
