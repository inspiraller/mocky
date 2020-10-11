import React, { FC, InputHTMLAttributes } from 'react';

import text from 'src/Main/text';

import { IConfigFieldsetItemProps } from 'src/store/eventCreate/configFieldset';
import { TacEdit } from 'src/store/eventCreate/actions';
import { IInitial, TLitVal } from 'src/store/eventCreate/_initialState';

import LabelStyle from 'src/Components/Common/Label/LabelStyle';
import SpanAdjacentStyle from 'src/Components/Common/SpanAdjacent/SpanAdjacentStyle';
import WrapInlineStyle from 'src/Components/Common/Wrap/WrapInlineStyle';

import CharCount from 'src/Components/Common/CharCount/CharCount';
import RowTypes from 'src/Components/Common/RowTypes/RowTypes';

import { SpanError, Success } from 'src/Components/Common/Validate/Validate';

type TElementType = HTMLInputElement | HTMLTextAreaElement;
type TInputChange = React.ChangeEvent<TElementType>;

const Label = LabelStyle();
const SpanAdjacent = SpanAdjacentStyle();
const WrapInline = WrapInlineStyle();

export interface ILabelInput {
  formid: string;
  isLabel: boolean;
  required: boolean | undefined;
  id: string;
  onChange: (evt: TInputChange) => void;
  onBlur: (evt: TInputChange) => void;
  inputKey: string;
  label: string;
  error: string;
  touched: boolean;
  value: TLitVal | undefined;
  maxLength?: number;
  type?: string;
  adjacent?: IConfigFieldsetItemProps['adjacent'];
  acEdit?: TacEdit;
  defaultValue?: TLitVal;
  eventCreate?: IInitial;
}

const withLabelInput = (Comp: FC<InputHTMLAttributes<TElementType>>): FC<ILabelInput> => props => {
  const {
    formid,
    isLabel,
    required,
    id,
    onChange,
    onBlur,
    inputKey,
    label,
    error,
    touched,
    value,
    maxLength,
    type,
    adjacent,
    acEdit,
    eventCreate
  } = props;
  const LabelInput = (
    <>
      {isLabel ? (
        <Label data-aria-required={required} htmlFor={id}>
          {text(label)}
        </Label>
      ) : null}
      <WrapInline>
        <Comp
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          name={inputKey}
          placeholder={text(label)}
          aria-required={required ? 'true' : 'false'}
          aria-invalid={error ? 'true' : 'false'}
          data-touched={touched ? 'true' : 'false'}
          aria-label={text(inputKey)}
          maxLength={maxLength}
          type={type}
          value={typeof value !== 'undefined' ? String(value) : ''}
        />
        {maxLength && type === 'textarea' ? (
          <CharCount {...{ maxLength, chars: String(value).length }} />
        ) : null}
      </WrapInline>
      {typeof adjacent === 'string' ? <SpanAdjacent>{adjacent}</SpanAdjacent> : null}
      {typeof adjacent === 'object' ? (
        <RowTypes {...{ formid, configFieldset: adjacent, acEdit, eventCreate }} />
      ) : null}
      <SpanError {...{ error }} />
      <Success is={!error && touched} />
    </>
  );
  return LabelInput;
};

export default withLabelInput;
