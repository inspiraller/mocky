import React from 'react';
import RowInput from 'src/Components/Common/RowInputHoc/RowInput';
import { IConfigFieldset } from 'src/store/eventCreate/configFieldset';

export const configFieldset: IConfigFieldset = {
  fruit: {}
};

const formid = 'x';
export const RowInputBasic = () => (
  <RowInput {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);
