import React, { FC } from 'react';

import { IConfigFieldset } from 'src/store/eventCreate/configFieldset';

import { validateNotEmpty } from 'src/Components/Common/Validate/Validate';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';
import RowInput from 'src/Components/Common/RowTypes/RowInput';

const Fieldset = FieldsetStyle();
const Legend = LegendStyle();

const configFieldset: IConfigFieldset = {
  title1: {
    required: true
  },
  title2: {
    validate: validateNotEmpty
  }
};

const inputProps1 = configFieldset.title1;
const inputProps2 = configFieldset.title2;
const formid = 'x';

const FieldAbout: FC = () => {
  return (
    <Fieldset>
      <Legend>About</Legend>
      <RowInput
        {...{ formid, inputKey: 'title1', inputProps: inputProps1 }}
        key={`RowInput-title`}
      />
      <RowInput
        {...{ formid, inputKey: 'title2', inputProps: inputProps2 }}
        key={`RowInput-title-2`}
      />
    </Fieldset>
  );
};

export default FieldAbout;
