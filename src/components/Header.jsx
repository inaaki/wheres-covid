import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
`;
const LogoWrapper = styled.span`
  color: var(--col-primary);
  font-family: 'Rubik Beastly', cursive;
  font-size: 5.4rem;
  line-height: 1;
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
