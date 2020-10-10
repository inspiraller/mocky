import 'cross-fetch/polyfill'; // patch for tests: Error: fetch is not found globally and no fetcher passed, to fix pass a fetch for your environment

import React, { FC } from 'react';
import text from 'src/Main/text';

import { IConfigForm, IConfigFormItemProps } from 'src/store/eventCreate/configForm';
import { IInitial } from 'src/store/eventCreate/_initialState';
import { TacEdit } from 'src/store/eventCreate/actions';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';

import RowInput from 'src/Components/Common/RowTypes/RowInput';
import RowTextArea from 'src/Components/Common/RowTypes/RowTextarea';
import RowSelect from 'src/Components/Common/RowTypes/RowSelect';
import RowRadio from 'src/Components/Common/RowTypes/RowRadio';

const Fieldset = FieldsetStyle();
const Legend = LegendStyle();

export interface IField {
  formid: string;
  configForm: IConfigForm;
  acEdit: TacEdit;
  eventCreate: IInitial;
}

const FieldAbout: FC<IField> = ({ formid, configForm, acEdit, eventCreate }) => {
  return (
    <Fieldset>
      <Legend>{text('About')}</Legend>
      {Object.keys(configForm.inputs).map((inputKey: string) => {
        const defaultValue: string | number | boolean = eventCreate[inputKey];
        const inputProps: IConfigFormItemProps = configForm.inputs[inputKey];
        const { type } = inputProps;

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
                {...{ formid, inputKey, inputProps, acEdit, defaultValue }}
                key={`RowSelect-${inputKey}`}
              />
            );
          case 'textarea':
            return (
              <RowTextArea
                {...{ formid, inputKey, inputProps, acEdit, defaultValue }}
                key={`RowTextarea-${inputKey}`}
              />
            );
          case 'radio':
            return (
              <RowRadio
                {...{ formid, inputKey, inputProps, acEdit, defaultValue }}
                key={`RowRadio-${inputKey}`}
              />
            );
          default:
            return (
              <RowInput
                {...{ formid, inputKey, inputProps, acEdit, defaultValue }}
                key={`RowInput-${inputKey}`}
              />
            );
        }
      })}
    </Fieldset>
  );
};

export default FieldAbout;
