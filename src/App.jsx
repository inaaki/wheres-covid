// eslint-disable-next-line consistent-return
import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getCountries, getCovidData } from './api';
import { Hero, Layout } from './components';
import calculateStats from './utils/calculateStat';
import { darkTheme, lightTheme } from './utils/colors';
import GlobalStyle from './utils/globalStyles';

const Wrapper = styled.div`
  min-height: 100%;
`;

function App() {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  // api related data state
  const [currentCountry, setCurrentCountry] = useState('global');
  const [countries, setCountries] = useState([]);
  const [covidInfo, setCovidInfo] = useState({});

  // getting countries
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await getCountries();
        setCountries(result);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setErr(e.message);
      }
    })();
  }, []);

  // getting total stats
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await getCovidData(currentCountry);
        const info = calculateStats(result);
        setCovidInfo(info);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setErr(e.message);
      }
    })();
  }, [currentCountry]);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const handleCurrentCountry = (country) => {
    setCurrentCountry(country);
  };

  return (
    <>
      {loading && 'Loading...'}
      {!loading && !err && (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Layout>
            <Wrapper>
              <Hero
                countries={countries}
                covidInfo={covidInfo}
                currentCountry={currentCountry}
                handleCountry={handleCurrentCountry}
                handleTheme={handleTheme}
              />
              {/* <Charts /> */}
            </Wrapper>
          </Layout>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
