import React, { useState } from 'react';
import './SearchForm.scss';
import { useDispatch } from 'react-redux';

import { getUserGists } from '../../store/actions/getUserGists';

function SearchForm() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(username.length) {
      dispatch(getUserGists(username));
    }
  }

  return (
    <div className="search-form-container">
      <form id="search-form" onSubmit={(e) => onFormSubmit(e)}>
        <input 
          id="username" 
          name="username" type="text" 
          placeholder="Enter username to search Gists for" 
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          autoComplete="off"/>
        <button id="submit-btn"  type="submit" className="btn">Search</button>
      </form>
    </div>
  );
}

export default React.memo(SearchForm);
