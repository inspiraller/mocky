import { withElem } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

const styles: TStyles = ({ theme: { pad10 } }) => `
  margin: ${pad10} 0 0;
  display: block;
`;

export default () => withElem('div', styles);
