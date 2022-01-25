import _lang from 'lodash/lang';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { cardColors } from '../utils/colors';
import Card, { cardSize, StyledCard, Value } from './Card';
import ToggleButton from './ToggleButton';

const StyledCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20rem 0 10rem;
  position: relative;

  .toggleBtn {
    position: absolute;
    bottom: 3px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

const MainCards = styled.div`
  ${Value} {
    font-size: 2.125em;
  }
  ${StyledCard} {
    &::after {
      font-size: 1.3em;
    }
  }
  ${StyledCard}:first-child {
    top: 5rem;
    right: 5rem;
  }
  ${StyledCard}:last-child {
    top: 5rem;
    left: 5rem;
  }
`;

const ExtraCards = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: max-content;

  & ${StyledCard} {
    width: ${`${cardSize / 2}rem`};
    height: ${`${cardSize / 2}rem`};
    margin: 0 2rem;
  }

  ${StyledCard}:first-child,
  ${StyledCard}:last-child {
    top: 3.5rem;
  }
`;

function Cards({ handleTheme, covidInfo }) {
  if (_lang.isEmpty(covidInfo)) return null;

  // card structure, holding property schema
  const extraInfo = ['recentCase', 'active', 'critical', 'recentDeath'];
  const netInfo = ['totalRecovery', 'totalCase', 'totalDeath'];

  // card generator
  const getCards = (arr) =>
    arr.map((item) => (
      <Card key={item} color={cardColors[item]} data={covidInfo[item]} />
    ));

  return (
    <StyledCards>
      <ExtraCards>{getCards(extraInfo)}</ExtraCards>
      <MainCards>{getCards(netInfo)}</MainCards>
      <ToggleButton handleTheme={handleTheme} />
    </StyledCards>
  );
}

export default Cards;

Cards.propTypes = {
  covidInfo: PropTypes.objectOf(PropTypes.object).isRequired,
  handleTheme: PropTypes.func.isRequired,
};
