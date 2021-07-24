import React, { useEffect, useState } from 'react';
import { shallow } from 'enzyme';
import Tags from '.';
import { gists } from '../../mocks/gists.mock';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
    useEffect: jest.fn(),
}));

describe('TagsComponent: when files data is present', () => {
    let wrapper;

    beforeAll(() => {
        useEffect.mockImplementation(f => f());
        useState.mockImplementation(() => [['Python', 'Java'], jest.fn]);
    });

    beforeEach(() => {
        wrapper = shallow(<Tags files={gists[0].files}  />);
    });

    it('should render tags without crashing  ', () => {
        expect(wrapper.find('.tag').at(0).text()).toEqual('Python');
        expect(wrapper.find('.tag').at(1).text()).toEqual('Java');
    })
})