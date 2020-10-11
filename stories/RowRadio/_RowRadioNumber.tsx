import React from 'react';
import RowRadio from 'src/Components/Common/RowRadio/RowRadio';
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

export const RowRadioNumber = () => (
  <RowRadio {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);
