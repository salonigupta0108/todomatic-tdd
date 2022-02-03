import {shallow,mount} from 'enzyme';
import {render} from '@testing-library/react'
import React from 'react';
import Todos from '../components/Todos'

describe('For rendering the todomatic app',() => {
    it("Should render todos component", () =>{
        const todo = shallow(<Todos />);

        const title = todo.find(Text);

        expect(title).toBeDefined();
        
    })
})
