import { withButton } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

// TODO
/* istanbul ignore next */
const styles: TStyles = ({ theme: { pad10, warn, success } }) => `
  padding: ${pad10};
  &[data-valid="false"] {
    background-color: ${warn}
  }
  &[data-valid="true"] {
    background-color: ${success}
  }
`;

export default () => withButton(styles);
