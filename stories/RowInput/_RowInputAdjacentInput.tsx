import React from 'react';
import RowInput from 'src/Components/Common/RowInputHoc/RowInput';
import { IConfigFieldset } from 'src/store/eventCreate/configFieldset';

export const configFieldset: IConfigFieldset = {
  fruit: {
    type: 'number',
    adjacent: {
      anotherfruit: {}
    }
  }
};

const formid = 'x';
export const RowInputAdjacentInput = () => (
  <RowInput {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);
