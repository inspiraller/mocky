import { withElem } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';
import { FontSize } from 'src/Main/Styles/utils';

const styles: TStyles = ({ theme: { pad10, fontSizeL } }) => `
  float: left;
  width: 100%;
  margin: ${pad10} 0 0;
  border: 0;
  text-indent: 0;
  ${FontSize(fontSizeL)};
  margin-bottom: ${pad10};
`;

export default () => withElem('legend', styles);
