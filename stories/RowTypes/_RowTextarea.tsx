import React from 'react';
import RowTextarea from 'src/Components/Common/RowTypes/RowTextarea';
import { IFormState } from 'src/Components/Complex/FormLayout';

const formState: IFormState = {
  isSubmitting: false,
  inputs: {
    fruit: {
      type: 'textarea',
      required: true
    }
  }
};

const RowTextareaBasic = () => <RowTextarea {...{ formState, label: 'fruit' }} />;

export default RowTextareaBasic;
