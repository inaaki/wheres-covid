import styled from 'styled-components';

// css variables
export const cardSize = 20;

export const Card = styled.div.attrs((props) => ({
  color: props.color || 'black',
}))`
  align-items: center;
  background-color: white;
  border-radius: 50%;
  border: .65rem solid ${(props) => props.color};
  box-sizing: content-box;
  color: ${(props) => props.color};
  display: inline-flex;
  font-size: 5rem;
  height: ${`${cardSize}rem`};
  justify-content: center;
  padding: 1rem;
  width: ${`${cardSize}rem`};
  position: relative;

  &.left {
    top: 5rem;
    right: 5rem;
  }
  &.right {
    top: 5rem;
    left: 5rem;
  }
`;
