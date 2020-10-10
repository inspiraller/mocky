import React from 'react';
import RowInput from 'src/Components/Common/RowInputHoc/RowInput';
import { IConfigFieldset } from 'src/store/eventCreate/configFieldset';

export const configFieldset: IConfigFieldset = {
  fruit: {
    maxLength: 10
  }
};

const formid = 'x';
export const RowInputMaxLength = () => (
  <RowInput {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);
