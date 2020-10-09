import React, { FC, useState } from 'react';
import text from 'src/Main/text';

import RowStyle from 'src/Components/Common/Row/RowStyle';
import LabelStyle from 'src/Components/Common/Label/LabelStyle';
import SelectStyle from 'src/Components/Common/Select/SelectStyle';
import OptionStyle from 'src/Components/Common/Select/OptionStyle';

import { SpanError, Success } from '../Validate/Validate';
import { IFormState } from '../../Complex/FormLayout/index';

type TInputChange = React.ChangeEvent<HTMLSelectElement>;

interface IField {
  formState: IFormState;
  label: string;
}

const Row = RowStyle();
const Select = SelectStyle();
const Option = OptionStyle();
const Label = LabelStyle();

const RowSelect: FC<IField> = ({ formState, label }) => {
  const [input, setInput] = useState('');
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

  const { validate, required, options } = formState.inputs[label];

  const updateErrors = (value: string) => {
    setTouched(true);
    if (validate) {
      setError(validate(label, value));
    }
  };

  const onChange = (evt: TInputChange) => {
    setInput(evt.target.value);
    updateErrors(evt.target.value);
  };

  return (
    <Row>
      <Label data-aria-required={required}>
        <span>{label}</span>
        <Select
          onChange={onChange}
          name={label}
          placeholder={text(label)}
          aria-required={required ? 'true' : 'false'}
          aria-invalid={error ? 'true' : 'false'}
          data-touched={touched && input !== '' ? 'true' : 'false'}
          aria-label={text(label)}
          value={input}
        >
          <Option value="">{text('Please select...')}</Option>

          {options &&
            options.map(item => (
              <Option key={`Option-${label}-${item.name}`} value={item.value}>
                {text(item.name)}
              </Option>
            ))}
        </Select>
      </Label>

      <SpanError {...{ error }} />
      <Success is={!!input && !error && touched} />
    </Row>
  );
};

export default RowSelect;