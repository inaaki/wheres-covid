import React from 'react';
import styled from 'styled-components';
import { Card, SmallCard } from './Card';

const StyledCards = styled.div`
  border: 1px solid red;
  display: flex;
  gap: 2rem;
  justify-content: center;
  max-width: max-content;
  width: 100%;
`;
function Cards() {
  return (
    <StyledCards>
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <Card className="left" color="tomato" />
      <Card className="middle" color="salmon" />
      <Card className="right" color="black" />
    </StyledCards>
  );
}

export default Cards;
