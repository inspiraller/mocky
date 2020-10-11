import { withLabel } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

const styles: TStyles = ({ theme: { pad2 } }) => `
  cursor: pointer;
  span {
    padding: 0 0 0 ${pad2};
  }
`;

export default () => withLabel(styles);
