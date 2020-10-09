import React, { FC, useState } from 'react';
import text from 'src/Main/text';

import RowStyle from 'src/Components/Common/Row/RowStyle';
import LabelStyle, { SpanLabelStyle } from 'src/Components/Common/Label/LabelStyle';
import RadioStyle from 'src/Components/Common/Radio/RadioStyle';

import { IConfigForm } from 'src/store/eventCreate/configForm';
import { TacEdit } from 'src/store/eventCreate/actions';

type TInputChange = React.ChangeEvent<HTMLInputElement>;

interface IField {
  configForm: IConfigForm;
  label: string;
  acEdit?: TacEdit;
}

const Row = RowStyle();
const Label = LabelStyle();
const SpanLabel = SpanLabelStyle();
const Radio = RadioStyle();

const RowRadio: FC<IField> = ({ configForm, label }) => {
  const { radios, defaultValue } = configForm.inputs[label];
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
