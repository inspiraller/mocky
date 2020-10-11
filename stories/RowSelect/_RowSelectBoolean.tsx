import React from 'react';
import RowSelect from 'src/Components/Common/RowSelect/RowSelect';
import { IConfigFieldset } from 'src/store/eventCreate/configFieldset';

export const configFieldset: IConfigFieldset = {
  fruit: {
    required: true,
    type: 'select',
    options: [
      { name: 'true', value: true },
      { name: 'FALSE', value: false }
    ],
    valueType: 'boolean'
  }
};
const formid = 'x';

export const RowSelectBoolean = () => (
  <RowSelect {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);

export default RowSelectBoolean;
