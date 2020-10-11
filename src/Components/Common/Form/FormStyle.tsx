import { withElem } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

const styles: TStyles = ({ theme: { pad20 } }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${pad20};
`;

export default () => withElem('form', styles);
