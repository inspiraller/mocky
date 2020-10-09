import React, { FC } from 'react';

import { IConfigForm } from 'src/store/eventCreate/configForm';

import { validateNotEmpty } from 'src/Components/Common/Validate/Validate';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';
import RowInput from 'src/Components/Common/RowTypes/RowInput';

const Fieldset = FieldsetStyle();
const Legend = LegendStyle();

const configForm: IConfigForm = {
  isSubmitting: false,
  inputs: {
    title1: {
      required: true
    },
    title2: {
      validate: validateNotEmpty
    }
  }
};

const FieldAbout: FC = () => {
  return (
    <Fieldset>
      <Legend>About</Legend>
      <RowInput {...{ configForm, inputKey: 'title1', label: 'title1' }} key={`RowInput-title`} />
      <RowInput {...{ configForm, inputKey: 'title2', label: 'title2' }} key={`RowInput-title-2`} />
    </Fieldset>
  );
};

export default FieldAbout;
