import { TStyles } from 'src/Main/Styles/Theme';
import { Link } from 'react-router-dom';
import { withComp } from 'src/Main/Styles/withStyle';

export const styles: TStyles = ({ theme: { blue1, blue2 } }) => `
  color: ${blue1};
  display: inline-block;
  &:hover {
    color: ${blue2};
  }
`;

export default () => withComp(Link, styles);
