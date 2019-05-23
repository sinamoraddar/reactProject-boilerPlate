import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render header correctly', () => {
    const wrapper = shallow(<Header startLogOut={() => { }} />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify')
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call startLogOut on button click', () => {
    const startLogOut = jest.fn();
    const wrapper = shallow(<Header startLogOut={startLogOut} />);
    wrapper.find('button').simulate('click');
    expect(startLogOut).toHaveBeenCalled();
});
