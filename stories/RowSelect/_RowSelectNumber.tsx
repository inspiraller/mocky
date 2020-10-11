import React from 'react';
import RowSelect from 'src/Components/Common/RowSelect/RowSelect';
import { IConfigFieldset } from 'src/store/eventCreate/configFieldset';

export const configFieldset: IConfigFieldset = {
  fruit: {
    required: true,
    type: 'select',
    options: [
      { name: 'Number1', value: 1 },
      { name: 'Number2', value: 2 },
      { name: 'Number3', value: 3 },
      { name: 'Number4', value: 4 }
    ],
    valueType: 'number'
  }
};
const formid = 'x';

export const RowSelectNumber = () => (
  <RowSelect {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);

export default RowSelectNumber;
