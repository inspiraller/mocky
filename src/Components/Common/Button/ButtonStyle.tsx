import { withButton } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

// TODO
/* istanbul ignore next */
const styles: TStyles = ({ theme: { pad10 } }) => `
  padding: ${pad10};
`;

export default () => withButton(styles);
