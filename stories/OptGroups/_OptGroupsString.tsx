import React from 'react';
import OptGroups from 'src/Components/Common/OptGroups/OptGroups';

export const optgroups = {
  groupX: [
    { name: 'string1', value: 'apple' },
    { name: 'string2', value: 'banana' },
    { name: 'string3', value: 'pear' }
  ],
  groupZ: [
    { name: 'string1', value: 'apple' },
    { name: 'string2', value: 'banana' },
    { name: 'string3', value: 'pear' }
  ],
  'Hello world': [
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
