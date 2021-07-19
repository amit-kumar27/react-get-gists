import React from 'react';
import './SearchGistsView.scss';

import SearchForm from './../../components/SearchForm';
import SearchResult from '../../components/SearchResult';

function SearchGistsView() {
  return (
    <div className="search-container">
        <SearchForm />
        <SearchResult />
    </div>
  );
}

export default SearchGistsView;
