import React from 'react';
import LabelRadio from 'src/Components/Common/LabelRadio/LabelRadio';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    required: true,
    type: 'radio',
    radios: [
      { name: 'number0', value: 0 },
      { name: 'number1', value: 1 },
      { name: 'number3', value: 3 },
      { name: 'number70', value: 70 }
    ],
    valueType: 'number'
  }
};
const formid = 'x';

export const LabelRadioNumber = () => (
  <LabelRadio {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);
