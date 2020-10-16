import { withElem } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

const styles: TStyles = ({ theme: { pad2, pad4, pad10, warn, textLight } }) => `
  display: inline-block;
  margin: ${pad4} 0 0 ${pad10};
  padding: ${pad2} ${pad10};
  background: ${warn};
  color: ${textLight};
  font-weight: bold;
  position: relative;
  border-radius: 2px;
  vertical-align: top;

  &:after {
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: "";
    position: absolute;
    border-right-color: ${warn};
    border-width: 4px;
    margin-top: -4px;
  }
`;

export default () => withElem('span', styles);
