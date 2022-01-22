import React from 'react';
import styled from 'styled-components';

const ChartsStyled = styled.div`
  border: 1px solid tomato;
  width: 100%;
  max-width: 60rem;
  height: 32rem;
`;

function Charts() {
  return <ChartsStyled>this is the charts demo</ChartsStyled>;
}

export default Charts;
