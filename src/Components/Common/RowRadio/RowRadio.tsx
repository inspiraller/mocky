import React, { FC, useState } from 'react';
import text from 'src/Main/text';

import { TLitVal } from 'src/store/eventCreate/_initialState';
import { IConfigFieldsetItemProps } from 'src/store/eventCreate/configFieldset';

import WrapInlineStyle from 'src/Components/Common/Wrap/WrapInlineStyle';

import RowBlockStyle from 'src/Components/Common/Row/RowBlockStyle';
import RowInlineStyle from 'src/Components/Common/Row/RowInlineStyle';

import LabelStyle, { SpanLabelStyle } from 'src/Components/Common/Label/LabelStyle';
import RadioStyle from 'src/Components/Common/Radio/RadioStyle';

import { IRowType } from 'src/Components/Common/RowType/RowType';

import hacEdit from '../RowType/util/hacEdit';
import getLabel from '../RowType/util/getLabel';

type TInputChange = React.ChangeEvent<HTMLInputElement>;

const RowBlock = RowBlockStyle();
const RowInline = RowInlineStyle();

const Label = LabelStyle();
const SpanLabel = SpanLabelStyle();
const Radio = RadioStyle();
const WrapInline = WrapInlineStyle();

interface ILabelRadios {
  isLabel: boolean;
  id: string;
  onChange: (evt: TInputChange) => void;
  inputKey: string;
  label: string;
  value: TLitVal | undefined;
  radios: IConfigFieldsetItemProps['radios'];
}

const LabelRadios: FC<ILabelRadios> = ({
  isLabel,
  id,
  onChange,
  inputKey,
  label,
  value,
  radios
}) => (
  <>
    {isLabel ? <SpanLabel data-value={value}>{label}</SpanLabel> : null}
    {radios &&
      radios.map((item: { name: string; value: TLitVal }) => (
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
  </>
);

const RowRadio: FC<IRowType> = ({ formid, inputKey, inputProps, acEdit, defaultValue }) => {
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
      <LabelRadios
        {...{
          isLabel,
          id,
          onChange,
          inputKey,
          label,
          value,
          radios
        }}
      />
    </Row>
  );
};

export default RowRadio;
