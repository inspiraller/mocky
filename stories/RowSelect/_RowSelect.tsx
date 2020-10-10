import React from 'react';
import RowSelect from 'src/Components/Common/RowSelect/RowSelect';
import { IConfigFieldset } from 'src/store/eventCreate/configFieldset';

const configFieldset: IConfigFieldset = {
  fruit: {
    required: true,
    type: 'select',
    options: [
      { name: 'apple', value: 1 },
      { name: 'banana', value: 2 }
    ],
    valueType: 'number'
  }
};
const formid = 'x';
const RowSelectBasic = () => (
  <RowSelect {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);

export default RowSelectBasic;
