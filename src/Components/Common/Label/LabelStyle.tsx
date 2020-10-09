import { TStyles } from 'src/Main/Styles/Theme';
import { withElem } from 'src/Main/Styles/withStyle';

type TSpan = (pad10: string, pad4: string) => string;

const getSpan: TSpan = (pad4, pad10) => `
  display: inline-block;
  margin: ${pad4} ${pad10} 0 0;
  width: 106px;
  vertical-align: top;
  text-transform: uppercase;
`;

const stylesSpan: TStyles = ({ theme: { pad4, pad10 } }) => `
  ${getSpan(pad4, pad10)}
`;

const styles: TStyles = ({ theme: { pad4, pad10 } }) => `
  &[data-aria-required="true"] > span {
    position: relative;
    &:after {
      content: " *";
    }
  }
  display: inline-block;
  > span:first-child {
    ${getSpan(pad4, pad10)}
  }
`;

export const SpanLabelStyle = () => withElem('span', stylesSpan);

export default () => withElem('label', styles);
