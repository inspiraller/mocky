import React, { FC, useState } from 'react';
import text from 'src/Main/text';

import RowStyle from 'src/Components/Common/Row/RowStyle';
import LabelStyle, { SpanLabelStyle } from 'src/Components/Common/Label/LabelStyle';
import RadioStyle from 'src/Components/Common/Radio/RadioStyle';
import { IFormState } from '../../Complex/FormLayout/index';

type TInputChange = React.ChangeEvent<HTMLInputElement>;

interface IField {
  formState: IFormState;
  label: string;
}

const Row = RowStyle();
const Label = LabelStyle();
const SpanLabel = SpanLabelStyle();
const Radio = RadioStyle();

const RowRadio: FC<IField> = ({ formState, label }) => {
  const { radios, defaultValue } = formState.inputs[label];
  const [input, setInput] = useState(defaultValue);

  const onChange = (evt: TInputChange) => {
    setInput(evt.target.value);
  };

  return (
    <Row>
      <SpanLabel data-value={input}>{label}</SpanLabel>
      {radios &&
        radios.map(name => (
          <Label key={`radio-${label}-${name}`}>
            <Radio
              type="radio"
              onChange={onChange}
              name={label}
              aria-label={text(label)}
              checked={name === input}
              value={name}
            />
            <span>{name}</span>
          </Label>
        ))}
    </Row>
  );
};

export default RowRadio;
