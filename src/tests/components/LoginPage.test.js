import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage component', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});


test('should call startLogIn on button click', () => {
    const startLogIn = jest.fn();
    const wrapper = shallow(<LoginPage startLogIn={startLogIn} />);
    wrapper.find('button').simulate('click');
    expect(startLogIn).toHaveBeenCalled();
});