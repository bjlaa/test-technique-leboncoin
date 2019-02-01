import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import MessageList from './index';
import Message from '../Message';

configure({ adapter: new Adapter() });

describe('MessageList', () => {
  it('should match its snapshot', () => {
  	const component = renderer.create(<MessageList />);

  	const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render a <Message /> for each element in the messages array', () => {
  	const arrayMessages = [
	  	{
	  		id: 0,
	  		text: 'test'
	  	},
			{
	  		id: 1,
	  		text: 'test'
	  	},
			{
	  		id: 2,
	  		text: 'test'
	  	},
  	];

  	const component = mount(<MessageList messages={arrayMessages} />);

  	expect(component.find(Message).length).toEqual(3);
  });
});
