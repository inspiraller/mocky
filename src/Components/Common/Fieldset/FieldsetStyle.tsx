import { withElem } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

const styles: TStyles = ({ theme: { pad20, pad40, grey2 } }) => `
  margin: ${pad20} auto 0 auto;
  padding: ${pad20} ${pad40};
  border: 0;
  border-top: 1px solid ${grey2};
  text-indent: 0;
  min-width: 860px;
  &:first-child {
    border-top: 0;
  }
  
  -webkit-box-shadow: 0px 0px 5px 2px rgba(237,232,237,1);
  -moz-box-shadow: 0px 0px 5px 2px rgba(237,232,237,1);
  box-shadow: 0px 0px 5px 2px rgba(237,232,237,1);
`;

export default () => withElem('fieldset', styles);
