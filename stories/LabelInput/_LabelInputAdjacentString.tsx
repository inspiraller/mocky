import React from 'react';
import LabelInput from 'src/Components/Common/LabelInputHoc/LabelInput';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    type: 'number',
    adjacent: 'Text adjacent to input'
  }
};

const formid = 'x';
export const LabelInputAdjacentString = () => (
  <LabelInput {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);
