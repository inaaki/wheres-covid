import React from 'react';
import styled from 'styled-components';
import { Card, cardSize } from './Card';

const cardColors = {
  critical: '#a8353b',
  newCase: '#ff2626',
  newDeath: '#404C54',
  recovery: '#28a0a1',
  totalCase: '#fe7e6d',
  totalDeath: '#32343E',
  totalRecovery: '#358874',
};

const StyledCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 0 5rem;
  position: relative;
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

function Cards() {
  return (
    <StyledCards>
      <Card className="left" color={cardColors.totalRecovery} />
      <Card color={cardColors.totalCase} />
      <Card className="right" color={cardColors.totalDeath} />
      <ExtraCards>
        <Card color={cardColors.newCase} />
        <Card color={cardColors.recovery} />
        <Card color={cardColors.critical} />
        <Card color={cardColors.newDeath} />
      </ExtraCards>
    </StyledCards>
  );
}

export default Cards;
