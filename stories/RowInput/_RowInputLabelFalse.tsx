import React from 'react';
import RowInput from 'src/Components/Common/RowInputHoc/RowInput';
import { IConfigFieldset } from 'src/store/eventCreate/configFieldset';

export const configFieldset: IConfigFieldset = {
  fruit: {
    label: false
  }
};

const formid = 'x';
export const RowInputLabelFalse = () => (
  <RowInput {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);
