import React from 'react';
import RowRadio from 'src/Components/Common/RowTypes/RowRadio';
import { IFormState } from 'src/Components/Complex/FormLayout';

const formState: IFormState = {
  isSubmitting: false,
  inputs: {
    fruit: {
      required: true,
      type: 'radio',
      radios: ['apple', 'banana']
    }
  }
};

const RowRadioBasic = () => <RowRadio {...{ formState, label: 'fruit' }} />;

export default RowRadioBasic;
