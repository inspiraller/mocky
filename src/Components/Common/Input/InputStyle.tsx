import { withInput } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

const styles: TStyles = ({ theme: { pad10, grey2, grey3, warn, success } }) => `
  padding: ${pad10};
  &::placeholder {
    font-style: italic;
  }
  &[data-touched="true"],
  &[aria-invalid="true"] {
    border-width: 1px;
    border-style: solid;
    background: ${success};
    border-color: ${success};
    color: ${grey3};
    font-weight: bold;
    &::placeholder {
      color: ${grey2};
    }
  }
  &[aria-invalid="true"] {
    background: ${warn};
    border-color: ${warn};
  }
`;

export default () => withInput(styles);
