import { Component } from 'react';
import React from 'react';
import { Overlay, ModalImage } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydownEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydownEsc);
  }

  handleKeydownEsc = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleClickBackdrop}>
        <ModalImage>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </ModalImage>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
