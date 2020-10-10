import React, { FC, useState, InputHTMLAttributes } from 'react';

import text from 'src/Main/text';

import RowBlockStyle from 'src/Components/Common/Row/RowBlockStyle';
import RowInlineStyle from 'src/Components/Common/Row/RowInlineStyle';

import LabelStyle from 'src/Components/Common/Label/LabelStyle';

import SpanAdjacentStyle from 'src/Components/Common/SpanAdjacent/SpanAdjacentStyle';
import WrapBlockStyle from 'src/Components/Common/Wrap/WrapBlockStyle';
import CharCount from 'src/Components/Common/CharCount/CharCount';

import { validateAll, SpanError, Success } from 'src/Components/Common/Validate/Validate';

import { IConfigFieldsetProps } from 'src/store/eventCreate/configFieldset';
import { TacEdit } from 'src/store/eventCreate/actions';
import { TLitVal } from 'src/store/eventCreate/_initialState';

import hacEdit from '../RowType/util/hacEdit';
import getLabel from '../RowType/util/getLabel';

type TElementType = HTMLInputElement | HTMLTextAreaElement;
type TInputChange = React.ChangeEvent<TElementType>;

interface IField {
  formid: string;
  inputKey: string;
  inputProps: IConfigFieldsetProps;
  acEdit?: TacEdit;
  defaultValue?: TLitVal;
}

const RowInline = RowInlineStyle();
const RowBlock = RowBlockStyle();

const Label = LabelStyle();
const SpanAdjacent = SpanAdjacentStyle();
const WrapBlock = WrapBlockStyle();

const withRowInput = (Comp: FC<InputHTMLAttributes<TElementType>>): FC<IField> => props => {
  const { formid, inputKey, inputProps, acEdit, defaultValue } = props;
  const { validate, required, adjacent, maxLength, valueType, inline } = inputProps;
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

  const type = valueType === 'number' ? 'number' : 'text';
  const id = `${formid}-${inputKey}`;

  const Row = inline ? RowInline : RowBlock;

  const HocRowInput = (
    <Row>
      {isLabel ? (
        <Label data-aria-required={required} htmlFor={id}>
          {text(label)}
        </Label>
      ) : null}
      <WrapBlock>
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
          data-adjacent={adjacent}
        />
        <CharCount {...{ maxLength, chars: String(value).length }} />
      </WrapBlock>
      {adjacent ? <SpanAdjacent>{adjacent}</SpanAdjacent> : null}
      <SpanError {...{ error }} />
      <Success is={!error && touched} />
    </Row>
  );

  return HocRowInput;
};

export default withRowInput;
