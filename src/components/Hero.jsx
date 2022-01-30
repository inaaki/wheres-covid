/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import _lang from 'lodash/lang';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Cards } from '.';

const Wrapper = styled.div`
  padding: 4rem 0 0;
  overflow: hidden;
`;

const Select = styled.select`
  appearance: none;
  background-color: ${(props) => props.theme.body};
  border-radius: 1rem;
  border: 0.2rem solid ${(props) => props.theme.font};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  color: ${(props) => props.theme.font};
  cursor: pointer;
  display: block;
  font-size: 2rem;
  margin: 1em auto;
  outline: 0;
  padding: 1rem;
  text-align: center;
`;

function Hero({
  countries,
  covidInfo,
  currentCountry,
  handleCountry,
  handleTheme,
}) {
  if (_lang.isEmpty(countries) || _lang.isEmpty(covidInfo)) return null;

  return (
    <Wrapper>
      <Cards covidInfo={covidInfo} handleTheme={handleTheme} />
      <Select
        onChange={(e) => {
          handleCountry(e.currentTarget.value);
        }}
        value={currentCountry || 'global'}
      >
        <option value="global">Global</option>
        {countries.map((country) => (
          <option key={country + Math.random()} value={country.toLowerCase()}>
            {country}
          </option>
        ))}
      </Select>
    </Wrapper>
  );
}

export default Hero;

Hero.propTypes = {
  countries: PropTypes.array,
  covidInfo: PropTypes.object,
  currentCountry: PropTypes.string,
  handleCountry: PropTypes.func,
  handleTheme: PropTypes.func,
};
