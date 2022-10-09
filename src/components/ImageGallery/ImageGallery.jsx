export const ImageGallery = ({ galery }) => {
  return (
    <ul>
      {galery.map(image => {
        return (
          <li key={image.id}>
            <img src={image.webformatURL} alt={image.tag} />
          </li>
        );
      })}
    </ul>
  );
};
