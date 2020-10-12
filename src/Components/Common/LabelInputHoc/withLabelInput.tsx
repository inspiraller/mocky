import React, { FC, useState, InputHTMLAttributes } from 'react';

import text from 'src/Main/text';

import RowTypes from 'src/Components/Common/RowInputTypes/RowInputTypes';
import { IRowInputType } from 'src/Components/Common/RowInputType/RowInputType';
import { validateAll, SpanError, Success } from 'src/Components/Common/Validate/Validate';
import CharCount from 'src/Components/Common/CharCount/CharCount';

import LabelStyle from 'src/Components/Common/Label/LabelStyle';
import SpanAdjacentStyle from 'src/Components/Common/SpanAdjacent/SpanAdjacentStyle';
import WrapInlineStyle from 'src/Components/Common/Wrap/WrapInlineStyle';

import hacEdit from 'src/util/hacEdit';

type TElementType = HTMLInputElement | HTMLTextAreaElement;
type TInputChange = React.ChangeEvent<TElementType>;

const Label = LabelStyle();
const SpanAdjacent = SpanAdjacentStyle();
const WrapInline = WrapInlineStyle();

export interface ILabelInput extends IRowInputType {
  ariaExpanded?: string;
}

const withLabelInput = (Comp: FC<InputHTMLAttributes<TElementType>>): FC<ILabelInput> => props => {
  const { formid, inputKey, inputProps, acEdit, defaultValue, eventCreate, isAdjacentItem } = props;
  const {
    type,
    validate,
    required,
    adjacent,
    maxLength,
    valueType,
    ariaExpands,
    isLabel
  } = inputProps;

  const [input, setInput] = useState(defaultValue);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

  const label = inputProps.label || inputKey;

  const value = acEdit ? defaultValue : input;

  const onChange = (evt: TInputChange) => {
    hacEdit({ setInput, acEdit, inputKey, value: evt.target.value, valueType });
  };

  const updateErrors = (val: string) => {
    setTouched(true);
    setError(validateAll({ validate, required, label, value: val }));
  };

  const onBlur = (evt: TInputChange) => {
    updateErrors(evt.target.value);
  };

  const id = `${formid}-${inputKey}`;

  const inputType = type === 'money' || !type ? 'text' : type;

  const LabelInput = (
    <>
      {isLabel === undefined || !isLabel ? (
        <Label data-aria-required={required} htmlFor={id} data-is-adjacentitem={isAdjacentItem}>
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
          aria-controls={ariaExpands || undefined}
          data-touched={touched ? 'true' : 'false'}
          aria-label={text(inputKey)}
          maxLength={maxLength}
          data-type={type}
          type={inputType}
          data-hasadjacent={!!adjacent}
          value={typeof value !== 'undefined' ? String(value) : ''}
        />
        {type === 'money' ? '$' : null}
        {maxLength && type === 'textarea' ? (
          <CharCount {...{ maxLength, chars: String(value).length }} />
        ) : null}
      </WrapInline>
      {typeof adjacent === 'string' ? <SpanAdjacent>{adjacent}</SpanAdjacent> : null}
      <SpanError {...{ error }} />
      <Success is={!!value && !error && touched} />
      {typeof adjacent === 'object' ? (
        <RowTypes
          {...{ formid, configFieldset: adjacent, acEdit, eventCreate, isAdjacentItem: true }}
        />
      ) : null}
    </>
  );
  return LabelInput;
};

export default withLabelInput;
