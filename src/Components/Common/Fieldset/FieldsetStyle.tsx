import { withElem } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

const styles: TStyles = ({ theme: { pad10, grey2 } }) => `
  margin: ${pad10} 0 0;
  border: 0;
  border-top: 1px solid ${grey2};
  padding: ${pad10} 0 0;
  text-indent: 0;
  min-width: 0;
  &:first-child {
    border-top: 0;
    margin: 0;
    padding: 0;
  }
`;

export default () => withElem('fieldset', styles);
