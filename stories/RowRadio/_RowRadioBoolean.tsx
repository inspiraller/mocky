import React from 'react';
import RowRadio from 'src/Components/Common/RowRadio/RowRadio';
import { IConfigFieldset } from 'src/store/eventCreate/configFieldset';

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

export const RowRadioBoolean = () => (
  <RowRadio {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);
