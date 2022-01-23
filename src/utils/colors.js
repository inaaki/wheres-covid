const colorPalette = {
  bgDark: '#191A19',
  bgLight: '#eeeeee',
  primaryDark: '#92A9BD',
  primaryLight: '#1A5F7A',
};

export const cardColors = {
  critical: '#a8353b',
  newCase: '#ff2626',
  newDeath: '#404C54',
  recovery: '#28a0a1',
  totalCase: '#fe7e6d',
  totalDeath: '#32343E',
  totalRecovery: '#358874',
};

export const lightTheme = {
  body: colorPalette.bgLight,
  font: colorPalette.primaryLight,
  shadow: colorPalette.bgDark,
};

export const darkTheme = {
  body: colorPalette.bgDark,
  font: colorPalette.primaryLight,
  shadow: colorPalette.bgLight,
};
