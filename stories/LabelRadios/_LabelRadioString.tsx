import React from 'react';
import LabelRadio from 'src/Components/Common/LabelRadio/LabelRadio';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    required: true,
    type: 'radio',
    radios: [
      { name: 'string1', value: 'apple' },
      { name: 'string2', value: 'banan' },
      { name: 'string3', value: 'pear' }
    ],
    valueType: 'boolean'
  }
};
const formid = 'x';

export const LabelRadioString = () => (
  <LabelRadio
    {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit, submitTouched: false }}
  />
);
