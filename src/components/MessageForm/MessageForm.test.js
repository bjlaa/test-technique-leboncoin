import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MessageForm from './index';

configure({ adapter: new Adapter() });

describe('MessageForm', () => {
	it('should match its snapshot', () => {
		const component = renderer.create(<MessageForm />);

		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should create a new message on form submit', () => {
		const spy = jest.fn();

		// We pass a spy function as the createMessage prop
		const component = mount(<MessageForm createMessage={spy} />);

		component.find('form').simulate('submit');

		expect(spy).toHaveBeenCalled();
	});

	it('should empty the form textarea and clear the private checkbox upon form submit', () => {
		const component = mount(<MessageForm createMessage={() => {}}/>);

		// We test that the textarea empties itself by setting it value to a string
		component.find('textarea').text('test');
		// Similarly we set the checkbox to true to check if it is reinitialized
		component.find('input').simulate('change', { target: { checked: true }});

		component.find('form').simulate('submit');

		expect(component.find('textarea').text()).toEqual('');
		expect(component.find('input').instance().checked).toEqual(false);
	});
});
