import React, { FC } from 'react';

import { IConfigFieldset } from 'src/store/eventCreate/configFieldset';
import { IInitial } from 'src/store/eventCreate/_initialState';
import { TacEdit } from 'src/store/eventCreate/actions';

import RowType from 'src/Components/Common/RowType/RowType';

export interface IField {
  formid: string;
  configFieldset: IConfigFieldset;
  acEdit?: TacEdit;
  eventCreate: IInitial;
}

const RowTypes: FC<IField> = ({ formid, configFieldset, acEdit, eventCreate }) => (
  <>
    {Object.keys(configFieldset).map((inputKey: string) => (
      <RowType
        key={`${formid}-RowType-${inputKey}`}
        {...{
          formid,
          inputKey,
          inputProps: configFieldset[inputKey],
          acEdit,
          eventCreate
        }}
      />
    ))}
  </>
);
// RowTypes.displayName = 'RowTypes';

export default RowTypes;
