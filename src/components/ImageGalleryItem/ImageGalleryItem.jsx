import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ galleryItem, onClick }) => {
  const { largeImageURL, webformatURL, tags } = galleryItem;
  return (
    <GalleryItem onClick={e => onClick(largeImageURL)}>
      <Image src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};
