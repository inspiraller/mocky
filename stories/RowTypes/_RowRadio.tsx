import React from 'react';
import RowRadio from 'src/Components/Common/RowTypes/RowRadio';
import { IConfigFieldset } from 'src/store/eventCreate/configFieldset';

const configFieldset: IConfigFieldset = {
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
const RowRadioBasic = () => (
  <RowRadio {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);

export default RowRadioBasic;
