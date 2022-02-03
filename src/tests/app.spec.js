import {shallow,mount} from 'enzyme';
import {fireEvent, getByTestId, render} from '@testing-library/react'
import React from 'react';
import App from '../App'

describe('For rendering the todomatic app',() => {
    
    it("Should render app component", () =>{
        const todo = shallow(<App />);

        const title = todo.find(Text);

        expect(title).toBeDefined();
        
    })

    
    it("Should have title Todomatic",() => {
        const app = render(<App />);
        expect(app.getByTestId('title')).toHaveTextContent('Todomatic');
    })

    it("Should have text input space", () =>{
        const {getByTestId} = render(<App />);
        expect(getByTestId("text-input")).not.toHaveAttribute("disabled");       
        
    })
    
    it("Should have date input space", () =>{
        const {getByTestId} = render(<App />);
        expect(getByTestId("date-input")).not.toHaveAttribute("disabled");       
        
    })
    
    it("Should have time input space", () =>{
        const {getByTestId} = render(<App />);
        expect(getByTestId("time-input")).not.toHaveAttribute("disabled");       
        
    })
    
    it("Should have add button", () =>{
        const {getByTestId} = render(<App />);
        expect(getByTestId("add-button")).not.toHaveAttribute("disabled");
           
    })

    it("Should display pending tasks", () =>{
        const {getByTestId} = render(<App />);
        expect(getByTestId("pending")).not.toHaveAttribute("disabled");
           
    })


})
