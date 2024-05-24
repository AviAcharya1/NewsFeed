import React from 'react';
import styles from './Navigation.module.css';

const Navigation = ({ selectedCategory, onCategoryChange }) => {
  const categories = ['general', 'technology', 'business', 'sports', 'entertainment'];

  return (
    <nav className={styles.navigation}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.navButton} ${
            selectedCategory === category ? styles.active : ''
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;