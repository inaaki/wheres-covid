import PropTypes from 'prop-types';
import React from 'react';
import { Footer, Header } from '.';
import styles from '../styles/Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
