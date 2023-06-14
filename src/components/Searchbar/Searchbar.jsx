import { useState } from 'react';
import React from 'react';
import {
  SearchbarInput,
  SearchButton,
  SearchInput,
  SearchForm,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const formSubmit = event => {
    event.preventDefault();
    setSearchName(inputValue.trim());
    onSubmit(searchName);
    event.target.reset();
  };

  return (
    <SearchbarInput onSubmit={formSubmit}>
      <SearchForm>
        <SearchButton type="submit">
          <span>Search</span>
        </SearchButton>

        <SearchInput
          onInput={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchbarInput>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
