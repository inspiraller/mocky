import { withElem } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

const styles: TStyles = () => `
  display: block;
`;

export default () => withElem('div', styles);
