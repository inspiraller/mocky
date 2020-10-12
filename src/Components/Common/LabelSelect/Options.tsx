import React, { FC } from 'react';

import { TLitVal } from 'src/store/eventCreate/_initialState';
import { Toptions } from 'src/types';
import text from 'src/Main/text';
import OptionStyle from 'src/Components/Common/Select/OptionStyle';

const Option = OptionStyle();

const Options: FC<{ formid: string; options: Toptions; label: string }> = ({
  formid,
  options,
  label
}) => (
  <>
    {options.map((item: { name: string; value: TLitVal }) => (
      <Option key={`${formid}-${label}-option-${item.name}`} value={String(item.value)}>
        {text(item.name)}
      </Option>
    ))}
  </>
);

export default Options;
