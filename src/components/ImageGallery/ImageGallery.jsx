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
              largeImg={image.largeImageURL}
              onClick={onImgClick}
            />
          );
        })}
      </Gallery>
    );
  }
}

/*
export const ImageGallery = ({ gallery, onImgClick }) => {
  return (
    <Gallery
      onClick={e => {
        console.log(e.currentTarget);
        onImgClick();
      }}
    >
      {gallery.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            galleryItem={image}
            largeImg={image.largeImageURL}
          />
        );
      })}
    </Gallery>
  );
};
*/
