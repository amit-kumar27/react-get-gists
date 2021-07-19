import React, { useState } from 'react';
import './SearchForm.scss';
import { useDispatch } from 'react-redux';

import SearchInput from './SearchInput';
import { getAllGists } from '../../store/actions/getUserGists';

function SearchForm() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const onInputValChange = (e) =>  {
    const { value } = e.target;
    setUsername(value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(username.length) {
      dispatch(getAllGists(username));
    }
  }

  return (
    <div className="search-form-container">
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input 
          name="username" type="text" 
          placeholder="Enter username to search Gists for" 
          onChange={(e) => onInputValChange(e)}/>
      </form>
    </div>
  );
}

export default SearchForm;
