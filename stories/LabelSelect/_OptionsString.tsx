import React from 'react';
import Options from 'src/Components/Common/LabelSelect/Options';

export const options = [
  { name: 'string1', value: 'apple' },
  { name: 'string2', value: 'banana' },
  { name: 'string3', value: 'pear' }
];

const formid = 'x';
const label = 'myconfiglabel';

export const OptionsString = () => (
  <select>
    <Options {...{ formid, options, label }} />
  </select>
);
