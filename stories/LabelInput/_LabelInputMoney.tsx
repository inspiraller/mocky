import React from 'react';
import LabelInput from 'src/Components/Common/LabelInputHoc/LabelInput';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    label: 'cash',
    type: 'money',
    valueType: 'number'
  }
};

const formid = 'x';
export const LabelInputMoney = () => (
  <LabelInput
    {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit, submitTouched: false }}
  />
);
