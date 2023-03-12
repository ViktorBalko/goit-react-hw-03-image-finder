import React from 'react';
import styles from './GalleryItem.module.css';

const GalleryItem = ({ item }) => (
  <li className={styles.GalleryItem}>
    <img
      className={styles.GalleryItemImage}
      src={item.webformatURL}
      alt={item.tags}
    />
  </li>
);

export default GalleryItem;
