import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '.';

describe('AvatarComponent', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Avatar 
            avatarUrl="https://avatars.githubusercontent.com/u/25728414?v=4"
            name="breitburg"
        />);
    });

    it('should render avatar without crashing', () => {
        expect(wrapper.find('#avatar').length).toEqual(1);
        expect(wrapper.find('#username').text()).toEqual('breitburg');
    })
})