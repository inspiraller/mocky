import React, { FC, useState } from 'react';
import text from 'src/Main/text';

import WrapInlineStyle from 'src/Components/Common/Wrap/WrapInlineStyle';

import RowBlockStyle from 'src/Components/Common/Row/RowBlockStyle';
import RowInlineStyle from 'src/Components/Common/Row/RowInlineStyle';

import LabelStyle, { SpanLabelStyle } from 'src/Components/Common/Label/LabelStyle';
import RadioStyle from 'src/Components/Common/Radio/RadioStyle';

import { IConfigFieldsetProps } from 'src/store/eventCreate/configFieldset';
import { TacEdit } from 'src/store/eventCreate/actions';
import { TLitVal } from 'src/store/eventCreate/_initialState';

import hacEdit from '../RowType/util/hacEdit';
import getLabel from '../RowType/util/getLabel';

type TInputChange = React.ChangeEvent<HTMLInputElement>;

interface IField {
  formid: string;
  inputKey: string;
  inputProps: IConfigFieldsetProps;
  acEdit?: TacEdit;
  defaultValue?: TLitVal;
}

const RowBlock = RowBlockStyle();
const RowInline = RowInlineStyle();
const Label = LabelStyle();
const SpanLabel = SpanLabelStyle();
const Radio = RadioStyle();
const WrapInline = WrapInlineStyle();

const RowRadio: FC<IField> = ({ formid, inputKey, inputProps, acEdit, defaultValue }) => {
  const { valueType, radios, inline } = inputProps;
  const { isLabel, label } = getLabel(inputKey, inputProps.label);
  const [input, setInput] = useState(defaultValue);

  const value = acEdit ? defaultValue : input;

  const onChange = (evt: TInputChange) => {
    hacEdit({ setInput, acEdit, inputKey, value: evt.target.value, valueType });
  };
  const id = `${formid}-${inputKey}`;
  const Row = inline ? RowInline : RowBlock;
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