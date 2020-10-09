import React from 'react';
import RowInput from 'src/Components/Common/RowTypes/RowInput';
import { IFormState } from 'src/Components/Complex/FormLayout';

const formState: IFormState = {
  isSubmitting: false,
  inputs: {
    fruit: {
      required: true
    }
  }
};

const RowInputBasic = () => <RowInput {...{ formState, label: 'fruit'}} />;

export default RowInputBasic;
