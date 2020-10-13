import { TStyles } from 'src/Main/Styles/Theme';
import { withLabel, withElem } from 'src/Main/Styles/withStyle';

const styles: TStyles = ({ theme: { pad4, pad10 } }) => `
  display: inline-block;
  margin: ${pad4} ${pad10} 0 0;
  width: 110px;
  vertical-align: top;
  text-transform: uppercase;
  &[data-aria-required="true"] {
    position: relative;
    &:after {
      content: " *";
    }
  }
  &[data-is-adjacentitem] {
    width: auto;
  }
`;

export const SpanLabelStyle = () => withElem('span', styles);

export default () => withLabel(styles);
