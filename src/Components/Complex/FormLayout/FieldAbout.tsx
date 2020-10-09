import 'cross-fetch/polyfill'; // patch for tests: Error: fetch is not found globally and no fetcher passed, to fix pass a fetch for your environment

import React, { FC } from 'react';
import text from 'src/Main/text';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';

import RowInput from 'src/Components/Common/RowTypes/RowInput';
import RowTextArea from 'src/Components/Common/RowTypes/RowTextarea';
import RowSelect from 'src/Components/Common/RowTypes/RowSelect';
import RowRadio from 'src/Components/Common/RowTypes/RowRadio';

import { IFormSetup } from './index';

const Fieldset = FieldsetStyle();
const Legend = LegendStyle();

const FieldAbout: FC<IFormSetup> = ({ configForm, acEdit, eventCreate }) => {
  return (
    <Fieldset>
      <Legend>{text('About')}</Legend>
      {Object.keys(configForm.inputs).map(item => {
        const defaultValue: string = eventCreate[item];
        switch (configForm.inputs[item].type) {
          case 'select':
            return (
              <RowSelect
                {...{ configForm, label: item, acEdit, defaultValue }}
                key={`RowSelect=${item}`}
              />
            );
          case 'textarea':
            return (
              <RowTextArea
                {...{ configForm, label: item, acEdit, defaultValue }}
                key={`RowTextarea=${item}`}
              />
            );
          case 'radio':
            return (
              <RowRadio
                {...{ configForm, label: item, acEdit, defaultValue }}
                key={`RowRadio=${item}`}
              />
            );
          default:
            return (
              <RowInput
                {...{ configForm, label: item, acEdit, defaultValue }}
                key={`RowInput=${item}`}
              />
            );
        }
      })}
    </Fieldset>
  );
};

export default FieldAbout;
