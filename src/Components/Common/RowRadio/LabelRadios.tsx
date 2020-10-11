import React, { FC } from 'react';
import text from 'src/Main/text';

import { TLitVal } from 'src/store/eventCreate/_initialState';
import { IConfigFieldsetItemProps } from 'src/store/eventCreate/configFieldset';

import WrapInlineStyle from 'src/Components/Common/Wrap/WrapInlineStyle';
import RadioStyle from 'src/Components/Common/Radio/RadioStyle';
import LabelStyle, { SpanLabelStyle } from 'src/Components/Common/Label/LabelStyle';

type TInputChange = React.ChangeEvent<HTMLInputElement>;

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
          <Label>
            <Radio
              id={id}
              type="radio"
              onChange={onChange}
              name={inputKey}
              aria-label={text(inputKey)}
              checked={String(item.value) === String(value)}
              value={String(item.value)}
            />
            {item.name}
          </Label>
        </WrapInline>
      ))}
  </>
);

export default LabelRadios;
