import React from 'react';

import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Results from '../results.js';
const testFunction = jest.fn();

describe('Results tests', () => {
  it('should render at application start', () => {
    let app = mount(<Results headers={{}} data={[]} archive={[]} populate={testFunction}/>);
    expect(app.find('#results').exists()).toBe(true);
  });

  it('should render with data ', () => {
    let app = mount(<Results headers={{}} data={[{name: 'test'}, {name: 'test2'}]} archive={[{name: 'test'}, {name: 'test2'}]} populate={testFunction}/>);
    expect(app.find('#results').exists()).toBe(true);
    expect(app.find('#details').exists()).toBe(true);
    expect(app.find('#history').exists()).toBe(true);
  });


  it('renders correctly', () => {
    const DOM = renderer.create(<Results headers={{}} data={[{name: 'test'}, {name: 'test2'}]} archive={[{name: 'test'}, {name: 'test2'}]} populate={testFunction}/>).toJSON();
    expect(DOM).toMatchSnapshot();
  });

});
