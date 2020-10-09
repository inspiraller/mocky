import { withInput } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

const styles: TStyles = ({ theme: { pad10 } }) => `
  margin: 0 ${pad10} 0 ${pad10};
  cursor: pointer;
`;

export default () => withInput(styles);
