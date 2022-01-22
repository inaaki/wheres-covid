import styled from 'styled-components';

// css variables
export const cardSize = 20;
export const Card = styled.div.attrs((props) => ({
  color: props.color || 'black',
}))`
  align-items: center;
  background-color: white;
  border-radius: 50%;
  border: 0.4rem solid ${(props) => props.color};
  color: ${(props) => props.color};
  display: flex;
  font-size: 5rem;
  height: ${`${cardSize}rem`};
  justify-content: center;
  padding: 1rem;
  width: ${`${cardSize}rem`};

  &.left {
    margin: 5% 3.5% 0 0;
  }
  &.right {
    margin: 5% 0 0 3.5%;
  }
`;
export const SmallCard = styled(Card)`
  width: ${`${cardSize / 2}rem`};
  height: ${`${cardSize / 2}rem`};
`;
