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
      {Object.keys(configForm.inputs).map(inputKey => {
        const defaultValue: string | number | boolean = eventCreate[inputKey];
        const item = configForm.inputs[inputKey];
        const label = item.label || inputKey;
        const { type } = item;

        // const { type, valueType } = item;
        // if (valueType === 'number' && (!type || type === 'textarea')) {
        //   return (
        //     <RowNumber
        //       {...{ configForm, inputKey, label, acEdit, defaultValue }}
        //       key={`RowNumber-${inputKey}`}
        //     />
        //   );
        // }
        switch (type) {
          case 'select':
            return (
              <RowSelect
                {...{ configForm, inputKey, label, acEdit, defaultValue }}
                key={`RowSelect-${inputKey}`}
              />
            );
          case 'textarea':
            return (
              <RowTextArea
                {...{ configForm, inputKey, label, acEdit, defaultValue }}
                key={`RowTextarea-${inputKey}`}
              />
            );
          case 'radio':
            return (
              <RowRadio
                {...{ configForm, inputKey, label, acEdit, defaultValue }}
                key={`RowRadio-${inputKey}`}
              />
            );
          default:
            return (
              <RowInput
                {...{ configForm, inputKey, label, acEdit, defaultValue }}
                key={`RowInput-${inputKey}`}
              />
            );
        }
      })}
    </Fieldset>
  );
};

export default FieldAbout;
