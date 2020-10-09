import { TStyles } from 'src/Main/Styles/Theme';
import { withElem } from 'src/Main/Styles/withStyle';

const styles: TStyles = ({ theme: { success, pad10 } }) => `
  display: inline-block;
  border-bottom: 4px solid ${success};
  border-right: 4px solid ${success};
  margin: 0 0 0 ${pad10};
  transform: rotate(42deg);
  height: 20px; 
  width: 10px;
  vertical-align: top;
`;

export default () => withElem('span', styles);
