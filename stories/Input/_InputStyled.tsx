import React from 'react';

import InputStyle from 'src/Components/Common/Input/InputStyle';

const Input = InputStyle();

export const InputStyled = () => (
  <Input type="text" defaultValue="simple" placeholder="enter text here" />
);

export default InputStyled;
