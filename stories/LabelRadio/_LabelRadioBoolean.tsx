import React from 'react';
import LabelRadio from 'src/Components/Common/LabelRadio/LabelRadio';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    required: true,
    type: 'radio',
    radios: [
      { name: 'FALSE', value: false },
      { name: 'true', value: true }
    ],
    valueType: 'boolean'
  }
};
const formid = 'x';

export const LabelRadioBoolean = () => (
  <LabelRadio {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);
