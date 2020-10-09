import React, { FC } from 'react';
import { IFormState } from 'src/Components/Complex/FormLayout/index';

import { validateNotEmpty } from 'src/Components/Common/Validate/Validate';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';
import RowInput from 'src/Components/Common/RowTypes/RowInput';

const Fieldset = FieldsetStyle();
const Legend = LegendStyle();

const formState: IFormState = {
  isSubmitting: false,
  inputs: {
    title: {
      required: true
    },
    description: {
      validate: validateNotEmpty
    }
  }
};

const FieldAbout: FC = () => {
  return (
    <Fieldset>
      <Legend>About</Legend>
      <RowInput {...{ formState, label: 'title' }} key={`RowInput-title`} />
      <RowInput {...{ formState, label: 'description' }} key={`RowInput-title-2`} />
    </Fieldset>
  );
};

export default FieldAbout;
