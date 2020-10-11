import React from 'react';
import RowSelect from 'src/Components/Common/RowSelect/RowSelect';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    required: true,
    type: 'select',
    options: [
      { name: 'string1', value: 'apple' },
      { name: 'string2', value: 'banana' },
      { name: 'string3', value: 'pear' }
    ],
    valueType: 'string'
  }
};
const formid = 'x';

export const RowSelectString = () => (
  <RowSelect {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);

export default RowSelectString;
