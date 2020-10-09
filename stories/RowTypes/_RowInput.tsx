import React from 'react';
import RowInput from 'src/Components/Common/RowTypes/RowInput';
import { IConfigForm } from 'src/store/eventCreate/configForm';

const configForm: IConfigForm = {
  isSubmitting: false,
  inputs: {
    fruit: {
      required: true
    }
  }
};

const RowInputBasic = () => <RowInput {...{ configForm, label: 'fruit'}} />;

export default RowInputBasic;
