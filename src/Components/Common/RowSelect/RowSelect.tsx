import React, { FC, useState } from 'react';
import text from 'src/Main/text';

import RowBlockStyle from 'src/Components/Common/Row/RowBlockStyle';
import RowInlineStyle from 'src/Components/Common/Row/RowInlineStyle';

import LabelStyle from 'src/Components/Common/Label/LabelStyle';
import SelectStyle from 'src/Components/Common/Select/SelectStyle';
import OptionStyle from 'src/Components/Common/Select/OptionStyle';

import { validateAll, SpanError, Success } from 'src/Components/Common/Validate/Validate';

import { IConfigFieldsetProps } from 'src/store/eventCreate/configFieldset';
import { TacEdit } from 'src/store/eventCreate/actions';
import { TLitVal } from 'src/store/eventCreate/_initialState';

import hacEdit from '../RowType/util/hacEdit';
import getLabel from '../RowType/util/getLabel';

type TInputChange = React.ChangeEvent<HTMLSelectElement>;

interface IField {
  formid: string;
  inputKey: string;
  inputProps: IConfigFieldsetProps;
  acEdit?: TacEdit;
  defaultValue?: TLitVal;
}

const RowInline = RowInlineStyle();
const RowBlock = RowBlockStyle();

const Select = SelectStyle();
const Option = OptionStyle();
const Label = LabelStyle();

const RowSelect: FC<IField> = ({ formid, inputKey, inputProps, acEdit, defaultValue }) => {
  const { validate, required, options, valueType, inline } = inputProps;
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

  const Row = inline ? RowInline : RowBlock;

  return (
    <Row>
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
          options.map(item => (
            <Option key={`Option-${label}-${item.name}`} value={String(item.value)}>
              {text(item.name)}
            </Option>
          ))}
      </Select>

      <SpanError {...{ error }} />
      <Success is={!!value && !error && touched} />
    </Row>
  );
};

export default RowSelect;
