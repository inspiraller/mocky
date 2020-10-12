import React, { FC } from 'react';
import text from 'src/Main/text';

import { IConfigFieldset, IConfigFieldsetInputProps } from 'src/types';
import { IInitial, TLitVal } from 'src/store/eventCreate/_initialState';

import { TacEdit } from 'src/store/eventCreate/actions';

import RowType, { IRowInputType } from 'src/Components/Common/RowInputType/RowInputType';
import getDefaultValueAnyType from 'src/util/getDefaultValueAnyType';

export interface IField {
  formid: string;
  configFieldset?: IConfigFieldset;
  acEdit?: TacEdit;
  eventCreate?: IInitial;
}

const RowInputTypes: FC<IField> = ({ formid, configFieldset, acEdit, eventCreate }) =>
  configFieldset ? (
    <>
      {Object.keys(configFieldset).map((inputKey: string) => {
        const inputProps: IConfigFieldsetInputProps = configFieldset[inputKey];

        const defaultValue: TLitVal = eventCreate
          ? eventCreate[inputKey]
          : getDefaultValueAnyType(inputProps.valueType || 'string');

        const rowTypeProps: IRowInputType = {
          formid,
          inputKey,
          inputProps,
          acEdit,
          defaultValue,
          eventCreate
        };
        // no need to share eventCreate with every component
        // if (eventCreate && typeof inputProps.adjacent === 'object') {
        //   rowTypeProps.eventCreate = eventCreate;
        // }
        return <RowType key={`${formid}-RowType-${inputKey}`} {...rowTypeProps} />;
      })}
    </>
  ) : (
    <span>{text('Loading ...')}</span>
  );
// RowTypes.displayName = 'RowTypes';

export default RowInputTypes;
