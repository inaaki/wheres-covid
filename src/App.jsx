// eslint-disable-next-line consistent-return
import _lang from 'lodash/lang';
import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Charts, Hero, Layout, Loader } from './components';
import useCountries from './hooks/useCountries';
import useCovidInfo from './hooks/useCovidInfo';
import { darkTheme, lightTheme } from './utils/colors';
import GlobalStyle from './utils/globalStyles';

const Wrapper = styled.div`
  min-height: 100%;
`;

function App() {
  const [currentCountry, setCurrentCountry] = useState('global');
  const [theme, setTheme] = useState('light');
  //
  const countries = useCountries();
  const covidInfo = useCovidInfo(currentCountry);

  useEffect(() => {
    (async () => {
      await countries.request();
      await covidInfo.request();
    })();
  }, [currentCountry]);
  //
  const loading = countries.loading || covidInfo.loading;
  const error = countries.error || covidInfo.error;
  //
  //
  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const handleCurrentCountry = (country) => setCurrentCountry(country);

  //
  if (error) {
    return <p>...{JSON.stringify(error)}...</p>;
  }
  if (loading) {
    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Loader />
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Layout>
        <Wrapper>
          <Hero
            countries={countries.data}
            covidInfo={covidInfo.data}
            currentCountry={currentCountry}
            handleCountry={handleCurrentCountry}
            handleTheme={handleTheme}
          />
          {!_lang.isEmpty(countries.data) && !_lang.isEmpty(covidInfo.data) && (
            <Charts currentCountry={currentCountry} />
          )}
        </Wrapper>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
