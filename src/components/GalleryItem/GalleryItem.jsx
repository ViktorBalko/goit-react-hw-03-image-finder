import React from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryItem.module.css';

const GalleryItem = ({ item, onClick }) => {
  const handleClick = () => {
    onClick(item.largeImageURL);
  };

  return (
    <li className={styles.GalleryItem}>
      <img
        src={item.webformatURL}
        alt={item.tags}
        className={styles.GalleryItemImage}
        onClick={handleClick}
      />
    </li>
  );
};

GalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryItem;
