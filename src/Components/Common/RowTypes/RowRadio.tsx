import React, { FC, useState } from 'react';
import text from 'src/Main/text';

import RowStyle from 'src/Components/Common/Row/RowStyle';
import LabelStyle, { SpanLabelStyle } from 'src/Components/Common/Label/LabelStyle';
import RadioStyle from 'src/Components/Common/Radio/RadioStyle';

import { IConfigForm } from 'src/store/eventCreate/configForm';
import { TacEdit } from 'src/store/eventCreate/actions';
import { TLitVal } from 'src/store/eventCreate/_initialState';

import hacEdit from './util/hacEdit';

type TInputChange = React.ChangeEvent<HTMLInputElement>;

interface IField {
  configForm: IConfigForm;
  inputKey: string;
  label: string;
  acEdit?: TacEdit;
  defaultValue?: TLitVal;
}

const Row = RowStyle();
const Label = LabelStyle();
const SpanLabel = SpanLabelStyle();
const Radio = RadioStyle();

const RowRadio: FC<IField> = ({ configForm, inputKey, label, acEdit, defaultValue }) => {
  const { valueType, radios } = configForm.inputs[inputKey];
  const [input, setInput] = useState(defaultValue);

  const value = acEdit ? defaultValue : input;

  const onChange = (evt: TInputChange) => {
    hacEdit({ setInput, acEdit, inputKey, value: evt.target.value, valueType });
  };

  return (
    <Row>
      <SpanLabel data-value={value}>{label}</SpanLabel>
      {radios &&
        radios.map(item => (
          <Label key={`radio-${label}-${item.name}`}>
            <Radio
              type="radio"
              onChange={onChange}
              name={inputKey}
              aria-label={text(inputKey)}
              checked={item.value === value}
              value={String(item.value)}
            />
            <span>{item.name}</span>
          </Label>
        ))}
    </Row>
  );
};

export default RowRadio;
