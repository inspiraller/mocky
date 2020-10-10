import React, { FC, useState } from 'react';
import text from 'src/Main/text';

import { TLitVal } from 'src/store/eventCreate/_initialState';
import { IConfigFieldsetItemProps } from 'src/store/eventCreate/configFieldset';

import RowStyle from 'src/Components/Common/Row/RowStyle';
import LabelStyle from 'src/Components/Common/Label/LabelStyle';
import SelectStyle from 'src/Components/Common/Select/SelectStyle';
import OptionStyle from 'src/Components/Common/Select/OptionStyle';

import { validateAll, SpanError, Success } from 'src/Components/Common/Validate/Validate';

import { IRowType } from 'src/Components/Common/RowType/RowType';

import hacEdit from '../RowType/util/hacEdit';
import getLabel from '../RowType/util/getLabel';

type TInputChange = React.ChangeEvent<HTMLSelectElement>;

const Row = RowStyle();
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
    <Success is={!!value && !error && touched} />
  </>
);

const RowSelect: FC<IRowType> = ({ formid, inputKey, inputProps, acEdit, defaultValue }) => {
  const { validate, required, options, valueType } = inputProps;
  const { isLabel, label } = getLabel(inputKey, inputProps.label);
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
    <Row>
      <LabelSelect
        {...{
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
        }}
      />
    </Row>
  );
};
export default RowSelect;
