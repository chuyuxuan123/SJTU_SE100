import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ToDoapp from '../component/ToDoapp';

configure({ adapter: new Adapter() });

describe("test a react app", () => {
    it("todoapp test", () => {
        const testCom = shallow(<ToDoapp />);
        expect(testCom.isEmpty()).toEqual(false);
    });

    it("todoapp state test", () => {
        const testCom = mount(<ToDoapp />);
        expect(testCom.state['todos']).toEqual(undefined);
        testCom.unmount();
    });
});