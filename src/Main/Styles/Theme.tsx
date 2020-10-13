const ratios: number[] = [2, 4, 10, 20, 40];

export const themeLight = {
  // Could separate into separate properties (dimensions and properties)
  // but is less cpu intensive and easier to read and pass keeping as one flat key value pair

  // dimensions
  maxTextWidth: '600px',
  pad2: `${ratios[0]}px`,
  pad4: `${ratios[1]}px`,
  pad10: `${ratios[2]}px`,
  pad20: `${ratios[3]}px`,
  pad40: `${ratios[4]}px`,

  // fonts:
  // fontFamily: "'Work Sans', sans-serif",
  fontFamily: 'sans-serif',
  fontSize1: 1.4,
  fontSize2: 2,
  fontSize3: 2.5,

  // colours
  // palette: {
  // primary: '#037Ef3',
  textLight: '#F3F4F7',
  grey1: '#868686',
  grey2: '#dedede',
  grey3: '#fefefe',
  blue1: '#0763bf',
  blue2: '#448cd4',
  warn: '#eb7895',
  success: '#1b1',
  primary: '#f60'
  // }
};

export const themeDark = {
  ...themeLight,
  ...{
    grey1: '#861'
  }
};

// const theme = createMuiTheme(themeLight);

export type TTheme = typeof themeLight;
export type TStyles = (props: { theme: TTheme }) => string;
