import React, { FC } from 'react';
import { IConfigFieldsetItemProps } from 'src/store/eventCreate/configFieldset';
import { TacEdit } from 'src/store/eventCreate/actions';
import { IInitial, TLitVal } from 'src/store/eventCreate/_initialState';

import RowInput from 'src/Components/Common/RowInputHoc/RowInput';
import RowTextArea from 'src/Components/Common/RowInputHoc/RowTextarea';
import RowSelect from 'src/Components/Common/RowSelect/RowSelect';
import RowRadio from 'src/Components/Common/RowRadio/RowRadio';

export interface IRowType {
  formid: string;
  inputKey: string;
  inputProps: IConfigFieldsetItemProps;
  acEdit?: TacEdit;
  defaultValue?: TLitVal;
  eventCreate?: IInitial;
}

const RowType: FC<IRowType> = ({
  formid,
  inputKey,
  inputProps,
  acEdit,
  defaultValue,
  eventCreate
}) => {
  const { type } = inputProps;
  switch (type) {
    case 'select':
      return (
        <RowSelect
          {...{ formid, inputKey, inputProps, acEdit, defaultValue, eventCreate }}
          key={`RowSelect-${inputKey}`}
        />
      );
    case 'textarea':
      return (
        <RowTextArea
          {...{ formid, inputKey, inputProps, acEdit, defaultValue, eventCreate }}
          key={`RowTextarea-${inputKey}`}
        />
      );
    case 'radio':
      return (
        <RowRadio
          {...{ formid, inputKey, inputProps, acEdit, defaultValue, eventCreate }}
          key={`RowRadio-${inputKey}`}
        />
      );
    default:
      return (
        <RowInput
          {...{ formid, inputKey, inputProps, acEdit, defaultValue, eventCreate }}
          key={`RowInput-${inputKey}`}
        />
      );
  }
};

export default RowType;
