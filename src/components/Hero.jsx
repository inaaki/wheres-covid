import React from 'react';
import styled from 'styled-components';
import { Cards } from '.';

const Wrapper = styled.div`
padding: 4rem 0 0;
`;

const Select = styled.select`
  appearance: none;
  border-radius: 1rem;
  border: 0.2rem solid var(--col-primary);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  color: var(--col-primary);
  display: block;
  font-size: 2rem;
  margin: 1em auto;
  outline: 0;
  padding: 1rem;
  text-align: center;
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
