import { Component } from 'react';
import React from 'react';
import {
  SearchbarInput,
  SearchButton,
  SearchInput,
  SearchForm,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  formSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarInput onSubmit={this.formSubmit}>
        <SearchForm>
          <SearchButton type="submit">
            <span>Search</span>
          </SearchButton>

          <SearchInput
            onInput={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarInput>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
