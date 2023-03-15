import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoreButton.module.css';

const MoreButton = ({ onLoadMore }) => {
  return (
    <button type="button" onClick={onLoadMore} className={styles.MoreButton}>
      load more
    </button>
  );
};

MoreButton.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default MoreButton;
