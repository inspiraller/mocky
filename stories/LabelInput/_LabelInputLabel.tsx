import React from 'react';
import LabelInput from 'src/Components/Common/LabelInputHoc/LabelInput';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    label: 'Fruit platter'
  }
};

const formid = 'x';
export const LabelInputLabel = () => (
  <LabelInput {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);
