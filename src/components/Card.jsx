import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { CountUp } from 'use-count-up';
import { getNumberAbbreviated as sNum } from '../utils/number';

// css variables
export const cardSize = 20;
const HoveredLabel = styled.div`
  /*  */
  --font-size: 1.25em;
  /*  */
  background-color: ${(props) => props.theme.body};
  bottom: calc(100% - 2rem);
  font-size: var(--font-size);
  min-width: 110%;
  opacity: 0;
  padding: calc(var(--font-size) * 1.5) 2rem 0;
  position: absolute;
  transition: opacity 350ms ease-out 150ms;
  z-index: 99;
  //
  &::before {
    border-top: 0.45rem solid ${(props) => props.color};
    bottom: 0;
    content: '${(props) => props.value.toLocaleString()}';
    left: 50%;
    padding: 0.45rem 1rem;
    position: absolute;
    transform: translateX(-50%);
  }
`;

export const StyledCard = styled.div`
  align-items: center;
  border-radius: 50%;
  border: 0.75rem solid ${(props) => props.color};
  box-sizing: content-box;
  color: ${(props) => props.them?.font};
  display: inline-flex;
  height: ${`${cardSize}rem`};
  justify-content: center;
  padding: 1rem;
  position: relative;
  width: ${`${cardSize}rem`};
  //
  &::after {
    content: '${(props) => props.label}';
    left: 50%;
    position: absolute;
    text-transform: capitalize;
    top: calc(100% + 1.5em);
    transform: translateX(-50%);
    width: max-content;
  }
  //
  &:hover ${HoveredLabel} {
    opacity: 1;
  }
`;

export const Value = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
`;

function Card({ color, data }) {
  const { label, value, recent } = data;
  return (
    <StyledCard color={color} label={label}>
      <HoveredLabel color={color} value={value} />
      <Value>
        {recent ? '+' : ''}{' '}
        <CountUp
          isCounting
          start={value / 2}
          end={value}
          duration={2}
          formatter={sNum}
        />
      </Value>
    </StyledCard>
  );
}

export default Card;

// prop validation
Card.defaultProps = {
  color: '#2a2a2a',
};
Card.propTypes = {
  color: PropTypes.string,
  data: PropTypes.exact({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    recent: PropTypes.bool,
  }).isRequired,
};
