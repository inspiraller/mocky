import React, { FC, useState } from 'react';
import text from 'src/Main/text';

import WrapInlineStyle from 'src/Components/Common/Wrap/WrapInlineStyle';

import RowStyle from 'src/Components/Common/Row/RowStyle';
import LabelStyle, { SpanLabelStyle } from 'src/Components/Common/Label/LabelStyle';
import RadioStyle from 'src/Components/Common/Radio/RadioStyle';

import { IConfigFormItemProps } from 'src/store/eventCreate/configForm';
import { TacEdit } from 'src/store/eventCreate/actions';
import { TLitVal } from 'src/store/eventCreate/_initialState';

import hacEdit from './util/hacEdit';
import getLabel from './util/getLabel';

type TInputChange = React.ChangeEvent<HTMLInputElement>;

interface IField {
  formid: string;
  inputKey: string;
  inputProps: IConfigFormItemProps;
  acEdit?: TacEdit;
  defaultValue?: TLitVal;
}

const Row = RowStyle();
const Label = LabelStyle();
const SpanLabel = SpanLabelStyle();
const Radio = RadioStyle();
const WrapInline = WrapInlineStyle();

const RowRadio: FC<IField> = ({ formid, inputKey, inputProps, acEdit, defaultValue }) => {
  const { valueType, radios } = inputProps;
  const { isLabel, label } = getLabel(inputKey, inputProps.label);
  const [input, setInput] = useState(defaultValue);

  const value = acEdit ? defaultValue : input;

  const onChange = (evt: TInputChange) => {
    hacEdit({ setInput, acEdit, inputKey, value: evt.target.value, valueType });
  };
  const id = `${formid}-${inputKey}`;
  return (
    <Row>
      {isLabel ? <SpanLabel data-value={value}>{label}</SpanLabel> : null}
      {radios &&
        radios.map(item => (
          <WrapInline key={`radio-${label}-${item.name}`}>
            <Radio
              id={id}
              type="radio"
              onChange={onChange}
              name={inputKey}
              aria-label={text(inputKey)}
              checked={item.value === value}
              value={String(item.value)}
            />
            <Label htmlFor={id}>{item.name}</Label>
          </WrapInline>
        ))}
    </Row>
  );
};

export default RowRadio;
