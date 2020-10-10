import React, { FC } from 'react';
import text from 'src/Main/text';

import { IConfigFieldset, IConfigFieldsetProps } from 'src/store/eventCreate/configFieldset';
import { IInitial } from 'src/store/eventCreate/_initialState';
import { TacEdit } from 'src/store/eventCreate/actions';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';

import RowType, { IRowType } from 'src/Components/Common/RowType/RowType';

const Fieldset = FieldsetStyle();
const Legend = LegendStyle();

export interface IField {
  formid: string;
  configFieldset: IConfigFieldset;
  acEdit: TacEdit;
  eventCreate: IInitial;
}

const FieldAbout: FC<IField> = ({ formid, configFieldset, acEdit, eventCreate }) => {
  return (
    <Fieldset>
      <Legend>{text('About')}</Legend>
      {Object.keys(configFieldset).map((inputKey: string) => {
        const defaultValue: string | number | boolean = eventCreate[inputKey];
        const inputProps: IConfigFieldsetProps = configFieldset[inputKey];

        // const defaultValue: TLitVal = eventCreate
        //   ? eventCreate[inputKey]
        //   : getDefaultValueAnyType(inputProps.valueType || 'string');

        const rowTypeProps: IRowType = {
          formid,
          inputKey,
          inputProps,
          acEdit,
          defaultValue
        };

        return <RowType key={`${formid}-RowType-${inputKey}`} {...rowTypeProps} />;
      })}
    </Fieldset>
  );
};

export default FieldAbout;
