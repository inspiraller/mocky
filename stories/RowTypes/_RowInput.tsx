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

const formid = 'x';
const RowInputBasic = () => (
  <RowInput {...{ formid, inputKey: 'fruit', inputProps: configForm.inputs.fruit }} />
);

export default RowInputBasic;
