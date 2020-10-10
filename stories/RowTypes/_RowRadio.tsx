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
const formid = 'x';
const RowRadioBasic = () => (
  <RowRadio {...{ formid, inputKey: 'fruit', inputProps: configForm.inputs.fruit }} />
);

export default RowRadioBasic;
