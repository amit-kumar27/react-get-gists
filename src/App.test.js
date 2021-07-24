import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './store/reducers';
import App from './App';
import SearchGistsView from './views/SearchGistsView';


describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <Provider store={createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)))}>
      <App />
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('invalid path should not redirect to 404', () => {
    
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} >
        <Provider store={createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)))}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(SearchGistsView)).toHaveLength(1);
  })
})