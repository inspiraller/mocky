import React, { FC, useState } from 'react';

import text from 'src/Main/text';
import hacEdit from 'src/util/hacEdit';

import { TLitVal } from 'src/store/eventCreate/_initialState';

import LabelStyle from 'src/Components/Common/Label/LabelStyle';
import SelectStyle from 'src/Components/Common/Select/SelectStyle';
import OptionStyle from 'src/Components/Common/Select/OptionStyle';

import { validateAll, SpanError, Success } from 'src/Components/Common/Validate/Validate';

import { IRowInputType } from 'src/Components/Common/RowInputType/RowInputType';

import { Toptions, Toptgroups } from 'src/types';

type TInputChange = React.ChangeEvent<HTMLSelectElement>;

const Select = SelectStyle();
const Option = OptionStyle();
const Label = LabelStyle();

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

const OptGroups: FC<{ formid: string; optgroups: Toptgroups; label: string }> = ({
  formid,
  optgroups,
  label
}) => (
  <>
    {Object.keys(optgroups).map(key => {
      const options = optgroups[key];

      return (
        <optgroup key={`${formid}-${label}-optgroup-${key}`} label={text(key)}>
          <Options {...{ formid, options, label }} />
        </optgroup>
      );
    })}
  </>
);

const LabelSelect: FC<IRowInputType> = ({
  formid,
  inputKey,
  inputProps,
  acEdit,
  defaultValue,
  isAdjacentItem
}) => {
  const { validate, required, options, optgroups, valueType, isLabel } = inputProps;

  const label = inputProps.label || inputKey;

  const [input, setInput] = useState(defaultValue);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

  const value = acEdit ? defaultValue : input;

  const updateErrors = (val: string) => {
    setTouched(true);
    setError(validateAll({ validate, required, label, value: val }));
  };

  const onChange = (evt: TInputChange) => {
    hacEdit({ setInput, acEdit, inputKey, value: evt.target.value, valueType });
    updateErrors(evt.target.value);
  };
  const id = `${formid}-${inputKey}`;
  return (
    <>
      {isLabel === undefined || !isLabel ? (
        <Label data-aria-required={required} htmlFor={id} data-is-adjacentitem={isAdjacentItem}>
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

        {options && !optgroups ? <Options {...{ formid, options, label }} /> : null}
        {optgroups && !options ? <OptGroups {...{ formid, optgroups, label }} /> : null}
      </Select>

      <SpanError {...{ error }} />
      <Success is={value !== '-1' && !!value && !error && touched} />
    </>
  );
};

export default LabelSelect;
