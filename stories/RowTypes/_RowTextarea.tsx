import React from 'react';
import RowTextarea from 'src/Components/Common/RowTypes/RowTextarea';
import { IConfigForm } from 'src/store/eventCreate/configForm';

const configForm: IConfigForm = {
  isSubmitting: false,
  inputs: {
    fruit: {
      type: 'textarea',
      required: true
    }
  }
};

const RowTextareaBasic = () => <RowTextarea {...{ configForm, label: 'fruit' }} />;

export default RowTextareaBasic;
