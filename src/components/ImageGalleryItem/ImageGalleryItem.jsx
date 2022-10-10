import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ galleryItem }) => {
  return (
    <GalleryItem>
      <Image src={galleryItem.webformatURL} alt={galleryItem.tags} />
    </GalleryItem>
  );
};
