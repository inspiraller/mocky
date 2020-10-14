import React, { FC } from 'react';

import { TLitVal, Toptions } from 'src/types';
import text from 'src/Main/text';
import OptionStyle from 'src/Components/Common/Select/OptionStyle';

const Option = OptionStyle();

interface IOptions {
  formid: string;
  options: Toptions;
  label: string;
}

const Options: FC<IOptions> = ({ formid, options, label }) => (
  <>
    {options.map((item: { name: string; value: TLitVal }) => (
      <Option key={`${formid}-${label}-option-${item.name}`} value={String(item.value)}>
        {text(item.name)}
      </Option>
    ))}
  </>
);

export default Options;
