import React from 'react';
import RowSelect from 'src/Components/Common/RowTypes/RowSelect';
import { IConfigForm } from 'src/store/eventCreate/configForm';

const configForm: IConfigForm = {
  isSubmitting: false,
  inputs: {
    fruit: {
      required: true,
      type: 'select',
      options: [
        { name: 'apple', value: 1 },
        { name: 'banana', value: 2 }
      ],
      valueType: 'number'
    }
  }
};
const formid = 'x';
const RowSelectBasic = () => (
  <RowSelect {...{ formid, inputKey: 'fruit', inputProps: configForm.inputs.fruit }} />
);

export default RowSelectBasic;
