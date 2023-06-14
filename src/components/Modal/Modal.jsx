import { useEffect } from 'react';
import React from 'react';
import { Overlay, ModalImage } from './Modal.styled';
import PropTypes from 'prop-types';

export function Modal({ onClose, largeImageURL, tags }) {
  const handleKeydownEsc = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleClickBackdrop = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydownEsc);

    return () => {
      window.removeEventListener('keydown', handleKeydownEsc);
    };
  }, []);

  return (
    <Overlay onClick={handleClickBackdrop}>
      <ModalImage>
        <img src={largeImageURL} alt={tags} />
      </ModalImage>
    </Overlay>
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
