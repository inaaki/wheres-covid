import React from 'react';
import styled from 'styled-components';
import { Charts, Hero, Layout } from './components';

const Wrapper = styled.div`
  height: 100%;
  background-color: #1a7c7c;
  display: grid;
  place-items: center;
`;

function App() {
  return (
    <Layout>
      <Wrapper>
        <Hero />
        <Charts />
      </Wrapper>
    </Layout>
  );
}

export default App;
