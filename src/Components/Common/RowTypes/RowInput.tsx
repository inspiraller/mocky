import React, { FC, useState } from 'react';
import text from 'src/Main/text';
import RowStyle from 'src/Components/Common/Row/RowStyle';
import LabelStyle from 'src/Components/Common/Label/LabelStyle';
import InputStyle from 'src/Components/Common/Input/InputStyle';
import SpanAdjacentStyle from 'src/Components/Common/SpanAdjacent/SpanAdjacentStyle';

import { SpanError, Success } from '../Validate/Validate';
import { IFormState } from '../../Complex/FormLayout/index';

type TInputChange = React.ChangeEvent<HTMLInputElement>;

interface IField {
  formState: IFormState;
  label: string;
}

const Row = RowStyle();
const Input = InputStyle();
const Label = LabelStyle();
const SpanAdjacent = SpanAdjacentStyle();

const RowInput: FC<IField> = ({ formState, label }) => {
  const [input, setInput] = useState('');
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

  const { validate, required, adjacent } = formState.inputs[label];

  const onChange = (evt: TInputChange) => {
    setInput(evt.target.value);
  };

  const updateErrors = (value: string) => {
    setTouched(true);
    if (validate) {
      setError(validate(label, value));
    }
  };

  const onBlur = (evt: TInputChange) => {
    updateErrors(evt.target.value);
  };

  return (
    <Row>
      <Label data-aria-required={required}>
        <span>{text(label)}</span>
        <Input
          onChange={onChange}
          onBlur={onBlur}
          name={label}
          placeholder={text(label)}
          aria-required={required ? 'true' : 'false'}
          aria-invalid={error ? 'true' : 'false'}
          data-touched={touched ? 'true' : 'false'}
          aria-label={text(label)}
          type="text"
          value={input}
          data-adjacent={adjacent}
        />
        {adjacent ? <SpanAdjacent>{adjacent}</SpanAdjacent> : null}
      </Label>

      <SpanError {...{ error }} />
      <Success is={!error && touched} />
    </Row>
  );
};

export default RowInput;
