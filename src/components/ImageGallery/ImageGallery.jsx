import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  render() {
    const { gallery, onImgClick } = this.props;

    return (
      <Gallery>
        {gallery.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              galleryItem={image}
              onClick={onImgClick}
            />
          );
        })}
      </Gallery>
    );
  }
}
