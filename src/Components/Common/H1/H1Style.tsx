import { withElem } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';
import { FontSize } from 'src/Main/Styles/utils';

const styles: TStyles = ({ theme: { pad20, pad40, textLight, fontSize3, blue1, blue2 } }) => `
  margin: 0;
  padding: ${pad20} ${pad40};
  border-top: 14px solid ${blue1};
  background: ${blue2};
  color: ${textLight};
  ${FontSize(fontSize3)};
  font-weight: normal;
`;

export default () => withElem('h1', styles);
