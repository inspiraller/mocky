import 'cross-fetch/polyfill'; // patch for tests: Error: fetch is not found globally and no fetcher passed, to fix pass a fetch for your environment

import React, { FC } from 'react';
import text from 'src/Main/text';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';

import RowInput from 'src/Components/Common/RowTypes/RowInput';
import RowTextArea from 'src/Components/Common/RowTypes/RowTextarea';
import RowSelect from 'src/Components/Common/RowTypes/RowSelect';
import RowRadio from 'src/Components/Common/RowTypes/RowRadio';

import { IFormState } from './index';

const Fieldset = FieldsetStyle();
const Legend = LegendStyle();

const FieldAbout: FC<{ formState: IFormState }> = ({ formState }) => {
  return (
    <Fieldset>
      <Legend>{text('About')}</Legend>
      {Object.keys(formState.inputs).map(item => {
        switch (formState.inputs[item].type) {
          case 'select':
            return <RowSelect {...{ formState, label: item }} key={`RowSelect=${item}`} />;
          case 'textarea':
            return <RowTextArea {...{ formState, label: item }} key={`RowTextarea=${item}`} />;
          case 'radio':
            return <RowRadio {...{ formState, label: item }} key={`RowRadio=${item}`} />;
          default:
            return <RowInput {...{ formState, label: item }} key={`RowInput=${item}`} />;
        }
      })}
    </Fieldset>
  );
};

export default FieldAbout;
