import { withInput } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

const styles: TStyles = ({ theme: { pad2, pad10, warn, success } }) => `
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
  &[data-adjacent] {
    width: 100px;
    min-width: 100px;
  }

  &[data-type="money"] {
    min-width: auto;
    width: 100px;
    margin: 0 ${pad2} 0 0;
  }
`;

export default () => withInput(styles);
