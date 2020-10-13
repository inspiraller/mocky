import { withButton } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

// TODO
/* istanbul ignore next */
const styles: TStyles = ({ theme: { pad20, warn, success, primary } }) => `
  padding: ${pad20};
  border: 0;
  color: white;
  text-transform:uppercase;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.6s;
  background-color: ${primary};
  outline: none;

  &:hover {
    opacity: 0.8;
  }

  &[data-valid="false"] {
    background-color: ${warn}
  }
  &[data-valid="true"] {
    background-color: ${success}
  }
`;

export default () => withButton(styles);
