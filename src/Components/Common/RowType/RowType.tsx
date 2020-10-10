import React, { FC } from 'react';
import { IConfigFieldsetProps } from 'src/store/eventCreate/configFieldset';
import { TacEdit } from 'src/store/eventCreate/actions';
import { IInitial, TLitVal } from 'src/store/eventCreate/_initialState';

import RowInput from 'src/Components/Common/RowInputHoc/RowInput';
import RowTextArea from 'src/Components/Common/RowInputHoc/RowTextarea';

import RowSelect from 'src/Components/Common/RowSelect/RowSelect';
import RowRadio from 'src/Components/Common/RowRadio/RowRadio';

import getDefaultValueAnyType from 'src/Components/Common/RowType/util/getDefaultValueAnyType';

export interface IRowType {
  formid: string;
  inputKey: string;
  inputProps: IConfigFieldsetProps;
  acEdit?: TacEdit;
  eventCreate: IInitial;
}

const RowType: FC<IRowType> = ({ formid, inputKey, inputProps, acEdit, eventCreate }) => {
  const { type } = inputProps;

  const defaultValue: TLitVal = eventCreate[inputKey];

  // const defaultValue: TLitVal = eventCreate
  //   ? eventCreate[inputKey]
  //   : getDefaultValueAnyType(inputProps.valueType || 'string');

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
};

export default RowType;
