import React from 'react';
import styled from 'styled-components';
import { Hero, Layout } from './components';

const Wrapper = styled.div`
  height: 100%;
`;

function App() {
  return (
    <Layout>
      <Wrapper>
        <Hero />
        {/* <Charts /> */}
      </Wrapper>
    </Layout>
  );
}

export default App;
