import React from 'react';
import LabelSelect from 'src/Components/Common/LabelSelect/LabelSelect';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    required: true,
    type: 'select',
    options: [
      { name: 'Number1', value: 1 },
      { name: 'Number2', value: 2 },
      { name: 'Number3', value: 3 },
      { name: 'Number4', value: 4 }
    ],
    valueType: 'number'
  }
};
const formid = 'x';

export const LabelSelectNumber = () => (
  <LabelSelect
    {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit, submitTouched: false }}
  />
);

export default LabelSelectNumber;
