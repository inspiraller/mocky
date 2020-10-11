import React, { FC, useState } from 'react';
import text from 'src/Main/text';

import { TLitVal } from 'src/store/eventCreate/_initialState';

import { IRowType } from 'src/Components/Common/RowType/RowType';

import WrapInlineStyle from 'src/Components/Common/Wrap/WrapInlineStyle';
import RadioStyle from 'src/Components/Common/Radio/RadioStyle';

import RadioLabelStyle from 'src/Components/Common/Radio/RadioLabelStyle';
import { SpanLabelStyle } from 'src/Components/Common/Label/LabelStyle';

import hacEdit from '../RowType/util/hacEdit';
import getLabel from '../RowType/util/getLabel';

type TInputChange = React.ChangeEvent<HTMLInputElement>;

const SpanLabel = SpanLabelStyle();
const Radio = RadioStyle();
const RadioLabel = RadioLabelStyle();
const WrapInline = WrapInlineStyle();

const LabelRadios: FC<IRowType> = ({ formid, inputKey, inputProps, acEdit, defaultValue }) => {
  const { valueType, radios } = inputProps;
  const { isLabel, label } = getLabel(inputKey, inputProps.label);
  const [input, setInput] = useState(defaultValue);

  const value = acEdit ? defaultValue : input;

  const onChange = (evt: TInputChange) => {
    hacEdit({ setInput, acEdit, inputKey, value: evt.target.value, valueType });
  };

  return (
    <>
      {isLabel ? <SpanLabel data-value={value}>{label}</SpanLabel> : null}
      {radios &&
        radios.map((item: { name: string; value: TLitVal }) => {
          const id = `${formid}-${inputKey}-${item.value}`;
          return (
            <WrapInline key={id}>
              <RadioLabel htmlFor={id}>
                <Radio
                  id={id}
                  type="radio"
                  onChange={onChange}
                  name={inputKey}
                  aria-label={text(inputKey)}
                  checked={String(item.value) === String(value)}
                  value={String(item.value)}
                />
                <span>{text(item.name)}</span>
              </RadioLabel>
            </WrapInline>
          );
        })}
    </>
  );
};

export default LabelRadios;
