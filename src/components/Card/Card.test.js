import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './index';

configure({ adapter: new Adapter() });

describe('Card', () => {
  it('should match its snapshot', () => {
    expect(false).toBe(true);
  });

  it('should render its children', () => {
    expect(false).toBe(true);
  });
});
