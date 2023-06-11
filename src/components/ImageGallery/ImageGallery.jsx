import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    return (
      <List>
        {this.props.images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </List>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
