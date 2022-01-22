import React from 'react';
import styled from 'styled-components';
import { Cards } from '.';

const Wrapper = styled.div`
  border: 1px solid black;
`;

const Select = styled.select`
  background-color: white;
  border-radius: 1rem;
  border: 0;
  display: block;
  font-size: 2rem;
  margin: 1em auto;
  outline: 0;
  padding: 1rem;
`;
function Hero() {
  return (
    <Wrapper>
      <Cards />
      <Select>
        <option>Bangladesh</option>
        <option selected>Usa</option>
        <option>Canada</option>
      </Select>
    </Wrapper>
  );
}

export default Hero;
