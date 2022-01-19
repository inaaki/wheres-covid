import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
  margin: 0 auto;
`;
const LogoWrapper = styled.span`
  color: white;
  font-family: 'Rubik Beastly', cursive;
  font-size: 3.2rem;
  text-transform: capitalize;
`;

function Header() {
  return (
    <StyledHeader>
      <LogoWrapper>where&apos;s corona?</LogoWrapper>
    </StyledHeader>
  );
}

export default Header;
