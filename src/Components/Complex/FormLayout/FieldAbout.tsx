import React, { FC } from 'react';
import text from 'src/Main/text';

import { IConfigFieldset, IConfigFieldsetProps } from 'src/store/eventCreate/configFieldset';
import { IInitial } from 'src/store/eventCreate/_initialState';
import { TacEdit } from 'src/store/eventCreate/actions';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';

import RowInput from 'src/Components/Common/RowInputHoc/RowInput';
import RowTextArea from 'src/Components/Common/RowInputHoc/RowTextarea';
import RowSelect from 'src/Components/Common/RowSelect/RowSelect';
import RowRadio from 'src/Components/Common/RowRadio/RowRadio';

const Fieldset = FieldsetStyle();
const Legend = LegendStyle();

interface IFieldset {
  formid: string;
  configFieldset: IConfigFieldset;
  acEdit: TacEdit;
  eventCreate: IInitial;
}

const FieldAbout: FC<IFieldset> = ({ formid, configFieldset, acEdit, eventCreate }) => {
  return (
    <Fieldset>
      <Legend>{text('About')}</Legend>
      {Object.keys(configFieldset).map((inputKey: string) => {
        const defaultValue: string | number | boolean = eventCreate[inputKey];
        const inputProps: IConfigFieldsetProps = configFieldset[inputKey];
        const { type } = inputProps;

        // const { type, valueType } = item;
        // if (valueType === 'number' && (!type || type === 'textarea')) {
        //   return (
        //     <RowNumber
        //       {...{ configFieldset, inputKey, label, acEdit, defaultValue }}
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
