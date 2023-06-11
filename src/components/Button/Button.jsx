import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export class Button extends Component {
  render() {
    return (
      <div>
        <ButtonLoadMore type="button" onClick={this.props.onClick}>
          Load more
        </ButtonLoadMore>
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
