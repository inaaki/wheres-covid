/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 25px;
  width: 50px;
  border-radius: 5rem;
  position: relative;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    #2e2e2e 0%,
    #2e2e2e 50%,
    #eee 50%,
    #eee 100%
  );
  background-size: 200% auto;
  background-position: ${(props) => (props.place === 'left' ? '0%' : '-100%')};
  transition: all 150ms ease-in;
`;

const Button = styled.div`
  --size: 29px;
  content: '';
  width: var(--size);
  height: var(--size);
  background: ${(props) => props.theme.font};
  position: absolute;
  top: -2px;
  left: ${(props) => (props.place === 'left' ? '-2px' : 'calc(100% - 27px)')};
  border-radius: 50%;
  transition: all 150ms ease-in;
`;

function ToggleButton({ handleTheme }) {
  const [place, setPlace] = useState('left');
  return (
    <Wrapper
      className="toggleBtn"
      place={place}
      onClick={() => {
        handleTheme();
        setPlace((prev) => (prev === 'left' ? 'right' : 'left'));
      }}
    >
      <Button place={place} />
    </Wrapper>
  );
}

export default ToggleButton;

ToggleButton.propTypes = {
  handleTheme: PropTypes.func,
};
