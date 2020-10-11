import React from 'react';
import RowRadio from 'src/Components/Common/RowRadio/RowRadio';
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

export const RowRadioString = () => (
  <RowRadio {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);
