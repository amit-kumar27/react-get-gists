import React from 'react';
import { shallow, mount} from 'enzyme';
import { useSelector, useDispatch } from 'react-redux';
import Forks from '.';
import { forks } from '../../mocks/forks.mock';


jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));


describe('ForksComponent: dispatch action to fetch forks', () => {
    let wrapper;
    let dispatch
    beforeAll(() => {
        dispatch = useDispatch.mockImplementation(() => (jest.fn));
        useSelector.mockImplementation(() => ( {
            forks: [], isLoading : true, error: false,
        } ));
        
    });

    beforeEach(() => {
        wrapper = mount(<Forks forksUrls={'https://api.github.com/gists/e29509123296784e4db4/forks'} />);
    });

    it('should call dispatch at rendering ', () => {
        expect(dispatch).toHaveBeenCalledTimes(1);
    })
})

describe('ForksComponent: when loader should display', () => {
    let wrapper;

    beforeAll(() => {
        useSelector.mockImplementation(() => ( {
            forks: [], isLoading : true, error: false,
        }  
        ));
    });

    beforeEach(() => {
        wrapper = shallow(<Forks />);
    });

    it('render loader msg ', () => {
        expect(wrapper.find('#forks-loader').text()).toEqual('Loading...');
    })
})

describe('ForksComponent: when data is present', () => {
    let wrapper;
    beforeAll(() => {
        useSelector.mockImplementation(() => ( {
            forks: forks, isLoading : false, error: false,
        }  
        ));
    });

    beforeEach(() => {
        wrapper = shallow(<Forks />);
    });

    it('render forks list', () => {
        expect(wrapper.find('.forks-list').length).toEqual(1);
        expect(wrapper.find('.fork-item').length).toEqual(1);
    })
})

describe('ForksComponent: when some error occurred', () => {
    let wrapper;

    beforeAll(() => {
        useSelector.mockImplementation(() => ( {
            gists: [], isLoading : false, error: 'Something went wrong!'
        }  
        ));
    });

    beforeEach(() => {
        wrapper = shallow(<Forks />);
    });

    it('render error msg ', () => {
        expect(wrapper.find('#fork-error-msg').text()).toEqual('Something went wrong!');
    })
})

