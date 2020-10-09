import React from 'react';
import RowRadio from 'src/Components/Common/RowTypes/RowRadio';
import { IConfigForm } from 'src/store/eventCreate/configForm';

const configForm: IConfigForm = {
  isSubmitting: false,
  inputs: {
    fruit: {
      required: true,
      type: 'radio',
      radios: [
        { name: 'apple', value: 0 },
        { name: 'banana', value: 1 }
      ],
      valueType: 'number'
    }
  }
};

const RowRadioBasic = () => (
  <RowRadio {...{ configForm, inputKey: 'fruit', label: 'fruit pallete' }} />
);

export default RowRadioBasic;
