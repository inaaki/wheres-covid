import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Footer, Header } from '.';

const Wrapper = styled.div`
display: grid;
grid-template-rows: auto 1fr auto;
max-width: 140rem;
min-height: 100vh;
`;

function Layout({ children }) {
  return (

    <Wrapper>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Wrapper>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};