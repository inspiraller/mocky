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
        { name: 'apple', value: '1' },
        { name: 'banana', value: '2' }
      ]
    }
  }
};

const RowSelectBasic = () => <RowSelect {...{ configForm, label: 'fruit' }} />;

export default RowSelectBasic;
