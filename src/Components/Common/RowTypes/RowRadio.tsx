import React, { FC, useState } from 'react';
import text from 'src/Main/text';

import RowStyle from 'src/Components/Common/Row/RowStyle';
import LabelStyle, { SpanLabelStyle } from 'src/Components/Common/Label/LabelStyle';
import RadioStyle from 'src/Components/Common/Radio/RadioStyle';

import { IConfigForm } from 'src/store/eventCreate/configForm';
import { TacEdit } from 'src/store/eventCreate/actions';

import hacEdit from './util/hacEdit';

type TInputChange = React.ChangeEvent<HTMLInputElement>;

interface IField {
  configForm: IConfigForm;
  label: string;
  acEdit?: TacEdit;
  defaultValue?: string;
}

const Row = RowStyle();
const Label = LabelStyle();
const SpanLabel = SpanLabelStyle();
const Radio = RadioStyle();

const RowRadio: FC<IField> = ({ configForm, label, acEdit, defaultValue }) => {
  const { radios } = configForm.inputs[label];
  const [input, setInput] = useState(defaultValue);

  const value = acEdit && defaultValue ? defaultValue : input;

  const onChange = (evt: TInputChange) => {
    hacEdit({ setInput, acEdit, label, value: evt.target.value });
  };

  return (
    <Row>
      <SpanLabel data-value={value}>{label}</SpanLabel>
      {radios &&
        radios.map(name => (
          <Label key={`radio-${label}-${name}`}>
            <Radio
              type="radio"
              onChange={onChange}
              name={label}
              aria-label={text(label)}
              checked={name === value}
              value={name}
            />
            <span>{name}</span>
          </Label>
        ))}
    </Row>
  );
};

export default RowRadio;
