import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  font-size: 62.5%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.font};
  font-size: 1.4rem;
  line-height: 1.5;font-family: 'Mochiy Pop P One', sans-serif;
}
`;

export default GlobalStyle;
