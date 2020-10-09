import { createGlobalStyle } from 'styled-components';
import { TStyles } from 'src/Main/Styles/Theme';
import { FontSize } from 'src/Main/Styles/utils';

const StyleMe: TStyles = ({ theme: { pad20, fontSize1, fontFamily } }) => `
  * {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    ${FontSize(fontSize1)}
    margin: 0;
    padding: 0;
    font-family: ${fontFamily};
    -webkit-font-smoothing: antialiased;
    line-height: 20px;
    line-height: 2rem;
  }
`;

const Global = createGlobalStyle`
${StyleMe}
`;

export default Global;
