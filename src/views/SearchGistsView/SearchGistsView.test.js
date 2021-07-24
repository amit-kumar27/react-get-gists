import React from 'react';
import { shallow } from 'enzyme';
import SearchGistsView from '.';
import SearchForm from '../../components/SearchForm';
import SearchResult from '../../components/SearchResult';

describe('SearchGistsViewComponent', () => {
    it('should render successfully', () => {
        const wrapper = shallow(<SearchGistsView/>);
        
        expect(wrapper.find(SearchForm)).toHaveLength(1);
        expect(wrapper.find(SearchResult)).toHaveLength(1);
    })
})