import React from 'react';

import InputErrorStyle from 'src/Components/Common/Input/InputErrorStyle';

const InputError = InputErrorStyle();

export const InputErrorStyledTheme = () => (
  <InputError
    theme={{
      pad2: 20,
      pad4: 40,
      pad10: 100,
      warn: '#f00',
      textLight: 'blue'
    }}
  >
    This is an error
  </InputError>
);

export default InputErrorStyledTheme;
