import React from 'react';
import RowTextarea from 'src/Components/Common/RowTypes/RowTextarea';
import { IConfigFieldset } from 'src/store/eventCreate/configFieldset';

const configFieldset: IConfigFieldset = {
  fruit: {
    type: 'textarea',
    required: true
  }
};

const formid = 'x';
const RowTextareaBasic = () => (
  <RowTextarea {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit }} />
);

export default RowTextareaBasic;
