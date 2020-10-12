import React from 'react';
import LabelInput from 'src/Components/Common/LabelInputHoc/LabelInput';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    type: 'number',
    adjacent: {
      adjacentItem: {
        label: 'Adjacent item',
        inline: true
      }
    }
  }
};

const formid = 'x';
export const LabelInputAdjacentInput = () => (
  <LabelInput
    {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit, submitTouched: false }}
  />
);
