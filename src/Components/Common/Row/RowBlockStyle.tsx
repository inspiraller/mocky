import { withElem } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

const styles: TStyles = ({ theme: { pad20 } }) => `
  clear: both; /* fix legend */
  display: block;
  width: 860px;
  margin: ${pad20} auto 0 auto;
  &[aria-expanded="false"] {
    display: none;
  }
  &[data-right="true"] {
    text-align: right;
  }
`;

export default () => withElem('div', styles);
