import styled, { StyledComponent } from 'styled-components';
import { TStyles } from 'src/Main/Styles/Theme';

const StyleMe: TStyles = ({ theme: { pad10, warn } }) => `
  display: inline-block;
  padding: 0 0 0 ${pad10};
  color: ${warn};
  font-weight: bold;
`;

export default () => styled.span`
  ${StyleMe}
`;
