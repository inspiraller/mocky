import React from 'react';
import RowSelect from 'src/Components/Common/RowTypes/RowSelect';
import { IFormState } from 'src/Components/Complex/FormLayout';

const formState: IFormState = {
  isSubmitting: false,
  inputs: {
    fruit: {
      required: true,
      type: 'select',
      options: [
        { name: 'apple', value: '1' },
        { name: 'banana', value: '2' }
      ]
    }
  }
};

const RowSelectBasic = () => <RowSelect {...{ formState, label: 'fruit' }} />;

export default RowSelectBasic;
