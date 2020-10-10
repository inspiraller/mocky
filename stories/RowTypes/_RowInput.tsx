import React from 'react';
import RowInput from 'src/Components/Common/RowTypes/RowInput';
import { IConfigFieldset } from 'src/store/eventCreate/configFieldset';

const configFieldset: IConfigFieldset = {
  fruit: {
    required: true
  }
};

const formid = 'x';
const RowInputBasic = () => (
  <RowInput {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);

export default RowInputBasic;
