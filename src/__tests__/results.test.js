import React from 'react';

import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Results from '../results.js';

describe('Results tests', () => {
  it('should render at application start', () => {
    let app = mount(<Results count={0} results={[]}/>);
    expect(app.find('#results').exists()).toBe(true);
    expect(app.find('#count').exists()).toBe(true);
    expect(app.find('#item-count').exists()).toBe(true);
    expect(app.find('#items').exists()).toBe(true);
  });

  it('should render with data ', () => {
    let app = mount(<Results count={2} results={[{name: 'test'}, {name: 'test2'}]}/>);
    expect(app.find('#results').exists()).toBe(true);
    expect(app.find('#count').exists()).toBe(true);
    expect(app.find('#item-count').exists()).toBe(true);
    expect(app.find('#items').exists()).toBe(true);
  });


  it('renders correctly', () => {
    const DOM = renderer.create(<Results count={2} results={[{name: 'test'}, {name: 'test2'}]}/>).toJSON();
    expect(DOM).toMatchSnapshot();
  });

});
