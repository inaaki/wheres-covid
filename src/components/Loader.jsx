import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const ballSize = 10;
// keyframe animation for loader component
const blink = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1.1);
  }
`;

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const LoaderWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: ${ballSize / 2}px;
  justify-content: center;
  min-height: 100vh;

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
    <>
      <GlobalStyle />
      <LoaderWrapper>
        <Ball />
        <Ball />
        <Ball />
        <Ball />
      </LoaderWrapper>
    </>
  );
}
