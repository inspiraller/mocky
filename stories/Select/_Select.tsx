import React from 'react';
import SelectStyle from 'src/Components/Common/Select/SelectStyle';
import OptionsStyle from 'src/Components/Common/Select/OptionStyle';

const Select = SelectStyle();
const Option = OptionsStyle();

const label = 'label';
const name = 'name';

const SelectBasic = () => (
  <Select name={label} aria-label={label}>
    <Option value="Some value">Some value</Option>
    <Option value="Some value">Some 2</Option>
  </Select>
);

export default SelectBasic;
