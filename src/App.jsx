// eslint-disable-next-line consistent-return
import _lang from 'lodash/lang';
import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getCountries, getCovidData } from './api/coronaData';
import { Charts, Hero, Layout, Loader } from './components';
import calculateStats from './utils/calculate';
import { darkTheme, lightTheme } from './utils/colors';
import GlobalStyle from './utils/globalStyles';

const Wrapper = styled.div`
  min-height: 100%;
`;

function App() {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(false);
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
  const handleCurrentCountry = (country) => setCurrentCountry(country);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      {loading && <Loader />}
      {!loading && !err && (
        <Layout>
          <Wrapper>
            <Hero
              countries={countries}
              covidInfo={covidInfo}
              currentCountry={currentCountry}
              handleCountry={handleCurrentCountry}
              handleTheme={handleTheme}
            />
            {!_lang.isEmpty(countries) && !_lang.isEmpty(covidInfo) && (
              <Charts currentCountry={currentCountry} />
            )}
          </Wrapper>
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default App;
