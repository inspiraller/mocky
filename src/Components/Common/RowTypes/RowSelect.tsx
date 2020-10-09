import React, { FC, useState } from 'react';
import text from 'src/Main/text';

import RowStyle from 'src/Components/Common/Row/RowStyle';
import LabelStyle from 'src/Components/Common/Label/LabelStyle';
import SelectStyle from 'src/Components/Common/Select/SelectStyle';
import OptionStyle from 'src/Components/Common/Select/OptionStyle';

import { validateAll, SpanError, Success } from 'src/Components/Common/Validate/Validate';
import { IConfigForm } from 'src/store/eventCreate/configForm';
import { TacEdit } from 'src/store/eventCreate/actions';
import { TLitVal } from 'src/store/eventCreate/_initialState';

import hacEdit from './util/hacEdit';

type TInputChange = React.ChangeEvent<HTMLSelectElement>;

interface IField {
  configForm: IConfigForm;
  inputKey: string;
  label: string;
  acEdit?: TacEdit;
  defaultValue?: TLitVal;
}

const Row = RowStyle();
const Select = SelectStyle();
const Option = OptionStyle();
const Label = LabelStyle();

const RowSelect: FC<IField> = ({ configForm, inputKey, label, acEdit, defaultValue }) => {
  const { validate, required, options, valueType } = configForm.inputs[inputKey];

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

  return (
    <Row>
      <Label data-aria-required={required}>
        <span>{label}</span>
        <Select
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
      </Label>

      <SpanError {...{ error }} />
      <Success is={!!value && !error && touched} />
    </Row>
  );
};

export default RowSelect;
