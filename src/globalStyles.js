import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  font-size: 62.5%;
  --col-primary: #1A5F7A;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #eee;
  color: var(--col-primary);
  font-size: 1.4rem;
  line-height: 1.5;
}
`;

export default GlobalStyle;
