import React from 'react';
import { mount } from 'enzyme';
import { useDispatch } from 'react-redux';
import { gists } from '../../mocks/gists.mock';
import Pagination from '.';


jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));


describe('PaginationComponent: when data is available', () => {
    let wrapper;
    let dispatch;
    beforeAll(() => {
        dispatch = useDispatch.mockImplementation(() => (jest.fn));
    });

    beforeEach(() => {
        wrapper = mount(<Pagination data={[...gists, ...gists]} totalCount={10}/>);
    });

    it('should render pagination elements ', () => {
        expect(wrapper.find('.page-number').length).toEqual(4);
    })

    it('should dispatch updated current page data and number ', () => {
        wrapper.find('.page-number').at(2).simulate('click');
        expect(wrapper.find('.active').text()).toEqual('2');
    })
})



describe('PaginationComponent: when no data is available', () => {
    let wrapper;
    let dispatch;
    beforeAll(() => {
        dispatch = useDispatch.mockImplementation(() => (jest.fn));
    });

    beforeEach(() => {
        wrapper = mount(<Pagination data={[]} totalCount={0}/>);
    });

    it('should not render pagination elements ', () => {
        expect(wrapper.find('.page-number').length).toEqual(2);
    })
})

