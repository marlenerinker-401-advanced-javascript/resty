import React from 'react';

import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Form from '../form.js';

describe('Form tests', () => {
  it('should render at application start', () => {
    let app = shallow(<Form />);
    expect(app.find('form').exists()).toBe(true);
    expect(app.find('section').exists()).toBe(true);
    expect(app.find('input').exists()).toBe(true);
    expect(app.find('p').exists()).toBe(true);
  });

  it('should update state when click GET', () => {
    let app = mount(<Form />);
    let button = app.find({className: 'button', value: 'GET'});
    expect(button.exists()).toBeTruthy();
    expect(app.state('method')).toBe('');
    button.simulate('click');
    expect(app.state('method')).toBe('GET');
  });

  it('should update state when click POST', () => {
    let app = mount(<Form />);
    let button = app.find({className: 'button', value: 'POST'});
    expect(button.exists()).toBeTruthy();
    expect(app.state('method')).toBe('');
    button.simulate('click');
    expect(app.state('method')).toBe('POST');
  });

  it('should update state when click PUT', () => {
    let app = mount(<Form />);
    let button = app.find({className: 'button', value: 'PUT'});
    expect(button.exists()).toBeTruthy();
    expect(app.state('method')).toBe('');
    button.simulate('click');
    expect(app.state('method')).toBe('PUT');
  });

  it('should update state when click DELETE', () => {
    let app = mount(<Form />);
    let button = app.find({className: 'button', value: 'DELETE'});
    expect(button.exists()).toBeTruthy();
    expect(app.state('method')).toBe('');
    button.simulate('click');
    expect(app.state('method')).toBe('DELETE');
  });

  it('should update state when URL is entered', () => {
    let app = mount(<Form />);
    let input = app.find('#url');
    input.simulate('change', { target: {value: 'test.com'}});
    expect(app.state('url')).toBe('test.com');
  });

  it('should display selected method and URL that was entered', () => {
    let app = mount(<Form />);
    let input = app.find('#url');
    let button = app.find({className: 'button', value: 'POST'});
    let form = app.find('form');
    button.simulate('click');
    expect(app.state('method')).toBe('POST');
    input.simulate('change', { target: {value: 'test.com'}});
    expect(app.state('url')).toBe('test.com');
    form.simulate('submit');
    expect(app.state('display')).toBe('POST test.com');
  });

  it('renders correctly', () => {
    const DOM = renderer.create(<Form />).toJSON();
    expect(DOM).toMatchSnapshot();
  });

});
