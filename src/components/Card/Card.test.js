import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './index';

configure({ adapter: new Adapter() });

describe('Card', () => {
  it('should match its snapshot', () => {
    const component = renderer.create(<Card />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render its children', () => {
    const child = <div id="child" />;

    const component = shallow(<Card children={child} />);

    expect(component.find('#child').length).toEqual(1);
  });
});
