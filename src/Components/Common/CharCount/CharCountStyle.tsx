import styled from 'styled-components';
import { TStyles } from 'src/Main/Styles/Theme';

const StyleMe: TStyles = ({ theme: { grey1 } }) => `
  display: block;
  color: ${grey1};
`;

export default () => styled.span`
  ${StyleMe}
`;
