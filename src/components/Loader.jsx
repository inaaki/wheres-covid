import React from 'react';
import styled, { keyframes } from 'styled-components';

const ballSize = 10;
const blink = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: ${ballSize / 2}px;

  & :nth-child(1) {
    background-color: #e15b64;
    animation-delay: 0ms;
  }

  & :nth-child(2) {
    background-color: #f8b26a;
    animation-delay: 112.5ms;
  }

  & :nth-child(3) {
    background-color: #abbd81;
    animation-delay: 225ms;
  }

  & :nth-child(4) {
    background-color: #81a3bd;
    animation-delay: 337.5ms;
  }
`;
const Ball = styled.div`
  width: ${ballSize}px;
  height: ${ballSize}px;
  border-radius: 50%;
  animation: ${blink} 450ms cubic-bezier(0.64, 0, 0.78, 0) infinite alternate;
  animation-fill-mode: both;
`;

export default function Loader() {
  return (
    <Container>
      <Ball />
      <Ball />
      <Ball />
      <Ball />
    </Container>
  );
}
