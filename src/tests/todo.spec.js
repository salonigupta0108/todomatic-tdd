import {shallow,mount} from 'enzyme';
import {render} from '@testing-library/react'
import React from 'react';
import Todo from '../components/Todo'

describe('For rendering the todomatic app',() => {
    
    it("Should render todo component", () =>{
        
        const todo = { todo: 'something', date: '2/2/2022', time: '12:30 pm' };
        const task = shallow(<Todo task={todo}/>);
        const title = task.find(Text);

        expect(title).toBeDefined();
        
    })
    it("Should have delete button", () =>{
        const todo = { todo: 'something', date: '2/2/2022', time: '12:30 pm' };
        const {getByTestId} = render(<Todo task={todo}/>);
        expect(getByTestId("delete-button")).not.toHaveAttribute("disabled");
           
    })
    
})

describe("For rendering functionalities",() => {
    it('Should call the deleteTodo function when delete button is clicked', () => {
        const todo = { todo: 'something', date: '2/2/2022', time: '12:30 pm' };
        const id = 0;
        const newTodo = {id, ...todo};
        const deleteTodo = jest.fn();
        const wrapper = mount(<Todo key = {id} task={newTodo} onDelete={deleteTodo} />);
        wrapper.find('button').simulate('click');
        expect(deleteTodo).toBeCalledWith(id);
      });

    })