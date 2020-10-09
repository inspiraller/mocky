import { withElem } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';
import { FontSize } from 'src/Main/Styles/utils';

const styles: TStyles = ({ theme: { grey1, grey2, pad10, pad20, fontSize2 } }) => `
  float: left;
  width: 100%;
  margin: ${pad10} 0 ${pad20};
  padding: 0 0 ${pad10};
  border: 0;
  text-indent: 0;
  ${FontSize(fontSize2)};
  font-weight: bold;
  border-bottom: 1px solid ${grey2};
  color: ${grey1};
  position: relative;
`;

export default () => withElem('legend', styles);
