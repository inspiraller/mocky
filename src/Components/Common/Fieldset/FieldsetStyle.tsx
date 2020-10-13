import { withElem } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

import { boxShadow } from 'src/Main/Styles/SharedStyles';

const styles: TStyles = ({ theme: { pad20, pad40, grey2 } }) => `
  margin: ${pad20} auto 0 auto;
  padding: ${pad20} ${pad40};
  border: 0;
  border-top: 1px solid ${grey2};
  text-indent: 0;
  &:first-child {
    border-top: 0;
  }
  
  ${boxShadow()}
`;

export default () => withElem('fieldset', styles);
