import React from 'react';
import styles from"./Header.module.css"

const Header = ({onSearch}) => {
    const handleSearch = (event) => {
        onSearch(event.target.value);
    }
    return (
        <header className={styles.header}>
            <h1 className={styles.head}>News FEED</h1>
            {/* <input className={styles.in} type="text" placeholder="Search news..." onChange={handleSearch} /> */}
        </header>
    );
};

export default Header
