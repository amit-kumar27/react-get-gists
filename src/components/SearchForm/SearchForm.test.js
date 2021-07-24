import React from 'react';
import { mount } from 'enzyme';
import SearchForm from '.';
import { Provider, useDispatch } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../../store/reducers';


jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn()
}));


describe('SearchFormComponent', () => {
    let wrapper, store;

    let dispatch
    beforeAll(() => {
        dispatch = useDispatch.mockImplementation(() => (jest.fn));
    });

    beforeEach(() => {
        store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));
        wrapper = mount(
            <Provider store={store} >
                <SearchForm />
            </Provider>
        );
    });

    it('should call dispatch on form submit', () => {
        const input = wrapper.find("#username");
        input.simulate('change', {
            target: {name: 'username', value: 'amit'}
        });
        wrapper.find('#submit-btn').simulate('click');
        expect(dispatch).toHaveBeenCalledTimes(2);
    })


    it('render search form', () => {
        expect(wrapper.find('#search-form')).toHaveLength(1);
        expect(wrapper.find('#username')).toHaveLength(1);
        expect(wrapper.find('#submit-btn')).toHaveLength(1);
    })

    it('should update username value in state', () => {
        const input = wrapper.find("#username");
        input.simulate('change', {
            target: {name: "username", value: "amit"}
        });
        expect(wrapper.find("#username").prop('value')).toBe('amit');
    })

    
})