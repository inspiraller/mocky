import { withElem } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';
import { boxShadow } from 'src/Main/Styles/SharedStyles';
import { FontSize } from 'src/Main/Styles/utils';

const styles: TStyles = ({ theme: { pad10, pad20, grey3, success, fontSize2 } }) => `
  display: block;
  width: 860px;
  margin: ${pad20} auto 0 auto;
  padding: ${pad20};
  background: ${grey3};

 ${boxShadow()}

  h2 {
    color: ${success};
    ${FontSize(fontSize2)};
  }
  p {
    margin: ${pad10} 0 0;
  }
`;

export default () => withElem('section', styles);
