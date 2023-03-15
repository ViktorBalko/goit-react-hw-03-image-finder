import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from 'components/GalleryItem';
import styles from './Gallery.module.css';

const Gallery = ({ response, onOpenModal }) => {
  return (
    <div>
      <ul className={styles.Gallery}>
        {response.map(item => (
          <GalleryItem key={item.id} item={item} onClick={onOpenModal} />
        ))}
      </ul>
    </div>
  );
};

Gallery.propTypes = {
  response: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default Gallery;
