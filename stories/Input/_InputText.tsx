import React from 'react';

import InputStyle from 'src/Components/Common/Input/InputStyle';

const InputStyled = InputStyle();

const InputText = () => (
  <InputStyled type="text" defaultValue="simple" placeholder="enter text here" />
);

export default InputText;
