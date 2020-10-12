import React from 'react';
import LabelSelect from 'src/Components/Common/LabelSelect/LabelSelect';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    required: true,
    type: 'select',
    options: [
      { name: 'true', value: true },
      { name: 'FALSE', value: false }
    ],
    valueType: 'boolean'
  }
};
const formid = 'x';

export const LabelSelectBoolean = () => (
  <LabelSelect
    {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit, submitTouched: false }}
  />
);

export default LabelSelectBoolean;
