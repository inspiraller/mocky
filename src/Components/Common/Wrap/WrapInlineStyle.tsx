import { withElem } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

// TODO
/* istanbul ignore next */
const styles: TStyles = () => `
  display: inline-block;
`;

export default () => withElem('div', styles);
