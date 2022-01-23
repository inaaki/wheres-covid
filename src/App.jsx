import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Hero, Layout } from './components';
import { darkTheme, lightTheme } from './utils/colors';
import GlobalStyle from './utils/globalStyles';

const Wrapper = styled.div`
  height: 100%;
`;

function App() {
  const [theme, setTheme] = useState('light');

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Layout>
        <Wrapper>
          <Hero handleTheme={handleTheme} />
          {/* <Charts /> */}
        </Wrapper>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
