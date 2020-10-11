import React, { FC } from 'react';
import text from 'src/Main/text';

import { TLitVal } from 'src/store/eventCreate/_initialState';
import { IConfigFieldsetItemProps } from 'src/store/eventCreate/configFieldset';

import LabelStyle from 'src/Components/Common/Label/LabelStyle';
import SelectStyle from 'src/Components/Common/Select/SelectStyle';
import OptionStyle from 'src/Components/Common/Select/OptionStyle';

import { SpanError, Success } from 'src/Components/Common/Validate/Validate';

type TInputChange = React.ChangeEvent<HTMLSelectElement>;

const Select = SelectStyle();
const Option = OptionStyle();
const Label = LabelStyle();

interface ILabelSelect {
  isLabel: boolean;
  required: boolean | undefined;
  id: string;
  onChange: (evt: TInputChange) => void;
  inputKey: string;
  label: string;
  error: string;
  touched: boolean;
  value: TLitVal | undefined;
  options: IConfigFieldsetItemProps['options'];
}

const LabelSelect: FC<ILabelSelect> = ({
  isLabel,
  required,
  id,
  onChange,
  inputKey,
  label,
  error,
  touched,
  value,
  options
}) => (
  <>
    {isLabel ? (
      <Label data-aria-required={required} htmlFor={id}>
        {text(label)}
      </Label>
    ) : null}
    <Select
      id={id}
      onChange={onChange}
      name={inputKey}
      placeholder={text(label)}
      aria-required={required ? 'true' : 'false'}
      aria-invalid={error ? 'true' : 'false'}
      data-touched={touched && value !== '' ? 'true' : 'false'}
      aria-label={text(inputKey)}
      value={String(value)}
    >
      <Option value="-1">{text('Please select...')}</Option>

      {options &&
        options.map((item: { name: string; value: TLitVal }) => (
          <Option key={`Option-${label}-${item.name}`} value={String(item.value)}>
            {text(item.name)}
          </Option>
        ))}
    </Select>

    <SpanError {...{ error }} />
    <Success is={value !== '-1' && !!value && !error && touched} />
  </>
);

export default LabelSelect;
