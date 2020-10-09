// import { createMuiTheme } from '@material-ui/core/styles';

const ratios: number[] = [1, 5, 10, 20];

export const themeLight = {
  // Could separate into separate properties (dimensions and properties)
  // but is less cpu intensive and easier to read and pass keeping as one flat key value pair

  // dimensions
  maxTextWidth: '600px',

  pad10: `${ratios[2]}px`,
  pad20: `${ratios[3]}px`,

  // fonts:
  // fontFamily: "'Work Sans', sans-serif",
  fontFamily: 'sans-serif',
  fontSizeDefault: 1.4,
  fontSizeL: 1.8,

  // colours
  // palette: {
  primary: '#037Ef3',
  textLight: '#F3F4F7',
  grey1: '#222',
  grey2: '#dedede',
  grey3: '#fefefe',
  blue1: '#22f',
  blue2: '#77f',
  warn: '#d82e2e',
  success: '#1b1'
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
