import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import ButtonAppBar from '../ButtonAppBar';

let wrapped;

beforeEach(() => {
    wrapped = shallow(
        <App />
    );
});

it('shows the ButtonAppBar', () => {
    expect(wrapped.find(ButtonAppBar).length).toEqual(1);
});

