import React from 'react';
import LabelTextarea from 'src/Components/Common/LabelInputHoc/LabelTextarea';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    type: 'textarea',
    required: true
  }
};

const formid = 'x';
export const LabelTextareaBasic = () => (
  <LabelTextarea
    {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit, submitTouched: false }}
  />
);

export default LabelTextareaBasic;
