import React from 'react';
import { mount } from 'enzyme';
import { gists } from '../../mocks/gists.mock';
import GistFileInfoCard from '.';


describe('GistFileInfoCardComponent: when data is available', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = mount(<GistFileInfoCard gistData={gists[0]} onGistCardClick={jest.fn} />);
    });

    it('should render component', () => {
        expect(wrapper.find('#info-card').length).toEqual(1);
    })

})

