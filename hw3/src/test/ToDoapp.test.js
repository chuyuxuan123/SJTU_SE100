import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ToDoapp from '../component/ToDoapp';
import ToDoForm from '../component/ToDoForm';
import ToDoList from '../component/ToDoList';
import ToDoItem from '../component/ToDoItem';

configure({ adapter: new Adapter() });

describe("<ToDoapp />", () => {
    const wrapper = mount(<ToDoapp />);
    it("title equal 'ToDo你想做什么?'",() => {
        expect(wrapper.find("h1").text()).toEqual("ToDo你要做什么？");
    });

    it("is a react component", () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it("contains a ToDoFrom",() => {
        expect(wrapper.containsMatchingElement(<ToDoForm />)).toEqual(true);
    });

    it("contains a ToDoList",() => {
        expect(wrapper.containsMatchingElement(<ToDoList />)).toEqual(true);
    });

    it("state of array todos is empty", () => {
        expect(wrapper.state['todos']).toEqual(undefined);
    });

    describe("<ToDoList />", () => {
        it("is a react component", () => {
            const childWrapper = wrapper.find(ToDoList);
            expect(childWrapper.exists()).toEqual(true);
        });
    });

});