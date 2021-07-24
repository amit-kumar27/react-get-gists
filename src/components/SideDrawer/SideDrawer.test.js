import React from 'react';
import { shallow } from 'enzyme';
import { gists } from '../../mocks/gists.mock';
import SideDrawer from '.';

describe('SideDrawerComponent: when gists data is present', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SideDrawer showDrawer={true} openSideDrawer={jest.fn} gistData={gists[0]}  />);
    });

    it('should render files without crashing  ', () => {
        expect(wrapper.find('.side-drawer').length).toEqual(1);
        expect(wrapper.find('.file-item').length).toEqual(1);
    })
})