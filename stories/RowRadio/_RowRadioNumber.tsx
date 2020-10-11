import React from 'react';
import RowRadio from 'src/Components/Common/RowRadio/RowRadio';
import { IConfigFieldset } from 'src/store/eventCreate/configFieldset';

export const configFieldset: IConfigFieldset = {
  fruit: {
    required: true,
    type: 'radio',
    radios: [
      { name: 'apple', value: 0 },
      { name: 'banana', value: 1 }
    ],
    valueType: 'number'
  }
};
const formid = 'x';

export const RowRadioNumber = () => (
  <RowRadio {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);
