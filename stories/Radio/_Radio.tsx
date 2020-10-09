import React from 'react';
import RadioStyle from 'src/Components/Common/Radio/RadioStyle';

const Radio = RadioStyle();

const onChange = () => {
  console.log('onchange handle');
};

const label = 'label';
const name = 'name';

const RadioBasic = () => (
  <Radio type="radio" onChange={onChange} name={label} aria-label={label} value={name} />
);

export default RadioBasic;
