import React from 'react';
import RowRadio from 'src/Components/Common/RowTypes/RowRadio';
import { IConfigForm } from 'src/store/eventCreate/configForm';

const configForm: IConfigForm = {
  isSubmitting: false,
  inputs: {
    fruit: {
      required: true,
      type: 'radio',
      radios: ['apple', 'banana']
    }
  }
};

const RowRadioBasic = () => <RowRadio {...{ configForm, label: 'fruit' }} />;

export default RowRadioBasic;
