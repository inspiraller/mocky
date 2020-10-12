import React from 'react';
import LabelInput from 'src/Components/Common/LabelInputHoc/LabelInput';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    label: 'some placholder for fruit',
    isLabel: false
  }
};

const formid = 'x';
export const LabelInputLabelFalse = () => (
  <LabelInput {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);
