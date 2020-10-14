import React from 'react';
import OptGroups from 'src/Components/Common/LabelSelect/OptGroups';

export const optgroups = {
  mygroup: [
    { name: 'string1', value: 'apple' },
    { name: 'string2', value: 'banana' },
    { name: 'string3', value: 'pear' }
  ]
};

const formid = 'x';
const label = 'myconfiglabel';

export const OptGroupsString = () => (
  <select>
    <OptGroups {...{ formid, optgroups, label }} />
  </select>
);
