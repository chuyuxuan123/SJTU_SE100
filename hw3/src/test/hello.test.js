import React from 'react'
import expect from 'expect'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import HelloWorld from '../component/HelloWorld'
configure({ adapter: new Adapter() });
const wrapper = shallow(<HelloWorld />);
describe('HelloWorld Component', () => {
  it('renders h1', () => {
    expect(wrapper.find('h1').text()).toEqual('Hello World')
  });
  it('renders p', () => {
    expect(wrapper.find('p').text()).toEqual('Welcome to my world')
  });
});