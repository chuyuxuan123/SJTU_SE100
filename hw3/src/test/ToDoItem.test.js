import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ToDoItem from '../component/ToDoItem';

configure({ adapter: new Adapter() });


describe("ToDoItem test",() => {
    it("ToDoItem test",() => {
        expect(1).toEqual(1);
    });
});