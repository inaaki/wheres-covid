/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

// css variables
export const cardSize = 20;

export const StyledCard = styled.div.attrs((props) => ({
  color: props.color || 'black',
}))`
  align-items: center;
  border-radius: 50%;
  border: 0.65rem solid ${(props) => props.color};
  box-sizing: content-box;
  color: ${(props) => props.theme.font};
  display: inline-flex;
  height: ${`${cardSize}rem`};
  justify-content: center;
  padding: 1rem;
  width: ${`${cardSize}rem`};
  position: relative;
`;

function Card({ children, ...rest }) {
  return <StyledCard {...rest}>{children}</StyledCard>;
}

export default Card;
