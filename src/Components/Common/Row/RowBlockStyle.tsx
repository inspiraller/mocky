import { withElem } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

const styles: TStyles = ({ theme: { pad20 } }) => `
  clear: both; /* fix legend */
  display: block;
  margin: ${pad20} 0 0;
  &[aria-expanded="false"] {
    display: none;
  }
`;

export default () => withElem('div', styles);
