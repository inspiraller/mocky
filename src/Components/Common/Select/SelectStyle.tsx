import { withSelect } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

const styles: TStyles = ({ theme: { pad10, warn, success } }) => `
  padding: ${pad10};
  min-width: 400px;
  display: inline-block; 
  &::placeholder {
    font-style: italic;
  }
  &[data-touched="true"] {
    border-color: ${success};
  }
  &[aria-invalid="true"] {
    border-color: ${warn};
  }
`;

export default () => withSelect(styles);
