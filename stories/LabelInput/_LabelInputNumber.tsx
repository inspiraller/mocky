import React from 'react';
import LabelInput from 'src/Components/Common/LabelInputHoc/LabelInput';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    type: 'number',
    valueType: 'number'
  }
};

const formid = 'x';
export const LabelInputNumber = () => (
  <LabelInput {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);
