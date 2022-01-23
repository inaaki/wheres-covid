/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { cardColors } from '../utils/colors';
import { Card, cardSize } from './Card';
import ToggleButton from './ToggleButton';

const StyledCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 0 5rem;
  position: relative;

  .toggleBtn {
    position: absolute;
    bottom: 3px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

const ExtraCards = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: max-content;
  ${Card} {
    width: ${`${cardSize / 2}rem`};
    height: ${`${cardSize / 2}rem`};
    margin: 0 2rem;
  }
  & :first-child,
  & :last-child {
    top: 3.5rem;
  }
`;

function Cards({ handleTheme }) {
  return (
    <StyledCards>
      <ExtraCards>
        <Card color={cardColors.newCase} />
        <Card color={cardColors.recovery} />
        <Card color={cardColors.critical} />
        <Card color={cardColors.newDeath} />
      </ExtraCards>
      <Card className="left" color={cardColors.totalRecovery} />
      <Card color={cardColors.totalCase} />
      <Card className="right" color={cardColors.totalDeath} />
      <ToggleButton handleTheme={handleTheme} />
    </StyledCards>
  );
}

export default Cards;

Cards.propTypes = {
  handleTheme: PropTypes.func,
};
