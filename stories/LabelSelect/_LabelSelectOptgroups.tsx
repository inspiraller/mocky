import React from 'react';
import LabelSelect from 'src/Components/Common/LabelSelect/LabelSelect';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    required: true,
    type: 'select',
    optgroups: {
      mygroup: [
        { name: 'string1', value: 'apple' },
        { name: 'string2', value: 'banana' },
        { name: 'string3', value: 'pear' }
      ]
    },
    valueType: 'string'
  }
};
const formid = 'x';

export const LabelSelectOptgroups = () => (
  <LabelSelect
    {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit, submitTouched: false }}
  />
);
