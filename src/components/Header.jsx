import React from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        where&apos;s corona?
      </span>
    </header>
  );
}

export default Header;
