import React from 'react';
import RowTextarea from 'src/Components/Common/RowInputHoc/RowTextarea';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    type: 'textarea',
    required: true
  }
};

const formid = 'x';
export const RowTextareaBasic = () => (
  <RowTextarea {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);

export default RowTextareaBasic;
