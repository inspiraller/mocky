import React, { FC, useState, InputHTMLAttributes } from 'react';

import { IConfigFieldsetItemProps } from 'src/store/eventCreate/configFieldset';
import { TacEdit } from 'src/store/eventCreate/actions';
import { IInitial, TLitVal } from 'src/store/eventCreate/_initialState';

import text from 'src/Main/text';

import RowBlockStyle from 'src/Components/Common/Row/RowBlockStyle';
import RowInlineStyle from 'src/Components/Common/Row/RowInlineStyle';
import LabelStyle from 'src/Components/Common/Label/LabelStyle';

import SpanAdjacentStyle from 'src/Components/Common/SpanAdjacent/SpanAdjacentStyle';
import WrapInlineStyle from 'src/Components/Common/Wrap/WrapInlineStyle';
import CharCount from 'src/Components/Common/CharCount/CharCount';
import RowTypes from 'src/Components/Common/RowTypes/RowTypes';

import { validateAll, SpanError, Success } from 'src/Components/Common/Validate/Validate';

import { IRowType } from 'src/Components/Common/RowType/RowType';

import hacEdit from '../RowType/util/hacEdit';
import getLabel from '../RowType/util/getLabel';

type TElementType = HTMLInputElement | HTMLTextAreaElement;
type TInputChange = React.ChangeEvent<TElementType>;

const RowBlock = RowBlockStyle();
const RowInline = RowInlineStyle();
const Label = LabelStyle();
const SpanAdjacent = SpanAdjacentStyle();
const WrapInline = WrapInlineStyle();

interface ILabelInput {
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

const withRowInput = (Comp: FC<InputHTMLAttributes<TElementType>>): FC<IRowType> => props => {
  const { formid, inputKey, inputProps, acEdit, defaultValue, eventCreate } = props;
  const { type, validate, required, adjacent, maxLength, valueType, inline } = inputProps;
  const { isLabel, label } = getLabel(inputKey, inputProps.label);

  const [input, setInput] = useState(defaultValue);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

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

  const HocLabelInput = withLabelInput(Comp);
  const Row = inline ? RowInline : RowBlock;
  const HocRowInput = (
    <Row>
      {
        <HocLabelInput
          {...{
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
          }}
        />
      }
    </Row>
  );

  return HocRowInput;
};

export default withRowInput;
