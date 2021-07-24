import React from 'react';
import { shallow, mount} from 'enzyme';
import { useSelector, useDispatch } from 'react-redux';
import SearchResult from '.';
import { gists } from '../../mocks/gists.mock';


jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));


describe('SearchResultComponent: when loader should display', () => {
    let wrapper;

    beforeAll(() => {
        useSelector.mockImplementation(() => ( {
            gists: [], isLoading : true, error: false,
        }  
        ));
    });

    beforeEach(() => {
        wrapper = shallow(<SearchResult />);
    });

    it('render loader msg ', () => {
        expect(wrapper.find('#loader').text()).toEqual('Loading...');
    })
})

describe('SearchResultComponent: when data is present', () => {
    let wrapper;
    beforeAll(() => {
        useSelector.mockImplementation(() => ( {
            gists: gists, isLoading : false, error: false,
            username: 'kale', currentGistsData: gists
        }  
        ));
    });

    beforeEach(() => {
        wrapper = shallow(<SearchResult />);
    });

    it('render data element ', () => {
        expect(wrapper.find('#result-count').text()).toEqual('5 results found for kale');
    })
})

describe('SearchResultComponent: when no data is present', () => {
    let wrapper;

    beforeAll(() => {
        useSelector.mockImplementation(() => ( {
            gists: [], isLoading : false, error: false,
            username: 'kale', currentGistsData: []
        }  
        ));
    });

    beforeEach(() => {
        wrapper = shallow(<SearchResult />);
    });

    it('render data element ', () => {
        expect(wrapper.find('#no-data-msg').text()).toEqual('0 results found for kale');
    })
})

describe('SearchResultComponent: when some error occurred', () => {
    let wrapper;

    beforeAll(() => {
        useSelector.mockImplementation(() => ( {
            gists: [], isLoading : false, error: 'Some error!'
        }  
        ));
    });

    beforeEach(() => {
        wrapper = shallow(<SearchResult />);
    });

    it('render error msg ', () => {
        expect(wrapper.find('#error-msg').text()).toEqual('Some error!');
    })
})


describe('SearchResultComponent: when info card clicked', () => {
    let wrapper;

    let dispatch;

    beforeAll(() => {
        dispatch = useDispatch.mockImplementation(() => (jest.fn));
        useSelector.mockImplementation(() => ( {
            gists: gists, isLoading : false, error: false,
            username: 'kale', currentGistsData: gists
        }  
        ));
    });

    beforeEach(() => {
        wrapper = mount(<SearchResult />);
    });

    it('should open side drawer correctly ', () => {
        wrapper.find('#info-card').at(0).simulate('click');
        expect((wrapper.find('.side-drawer').length)).toEqual(1);
    });
})