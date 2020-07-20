import React from 'react';

import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter, Route } from 'react-router-dom';

import History from '../history.js';
const testFunction = jest.fn();

describe('History tests', () => {
  it('should render at application start', () => {
    let app = mount(<BrowserRouter><History archive={[]} populate={testFunction}/></BrowserRouter>);
    expect(app.find('p').exists()).toBe(true);
    expect(app.find('li').exists()).toBe(false);

  });

  it('should render with data ', () => {
    let app = mount(<BrowserRouter><History archive={[{name: 'test'}, {name: 'test2'}]} populate={testFunction}/></BrowserRouter>);
    expect(app.find('p').exists()).toBe(true);
    expect(app.find('li').exists()).toBe(true);
  });


  it('renders correctly', () => {
    const DOM = renderer.create(<BrowserRouter><History archive={[{name: 'test'}, {name: 'test2'}]} populate={testFunction}/></BrowserRouter>).toJSON();
    expect(DOM).toMatchSnapshot();
  });

});
