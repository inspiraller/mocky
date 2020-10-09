import React, { FC, useState, InputHTMLAttributes } from 'react';
import text from 'src/Main/text';

import RowStyle from 'src/Components/Common/Row/RowStyle';
import LabelStyle from 'src/Components/Common/Label/LabelStyle';

import SpanAdjacentStyle from 'src/Components/Common/SpanAdjacent/SpanAdjacentStyle';
import WrapBlockStyle from 'src/Components/Common/WrapBlock/WrapBlockStyle';
import CharCount from 'src/Components/Common/CharCount/CharCount';

import { validateAll, SpanError, Success } from 'src/Components/Common/Validate/Validate';

import { IConfigForm } from 'src/store/eventCreate/configForm';
import { TacEdit } from 'src/store/eventCreate/actions';
import { TLitVal } from 'src/store/eventCreate/_initialState';

import hacEdit from '../util/hacEdit';

type TElementType = HTMLInputElement | HTMLTextAreaElement;
type TInputChange = React.ChangeEvent<TElementType>;

interface IField {
  configForm: IConfigForm;
  inputKey: string;
  label: string;
  acEdit?: TacEdit;
  defaultValue?: TLitVal;
}

const Row = RowStyle();
const Label = LabelStyle();
const SpanAdjacent = SpanAdjacentStyle();
const WrapBlock = WrapBlockStyle();

const withRowInput = (Comp: FC<InputHTMLAttributes<TElementType>>): FC<IField> => props => {
  const { configForm, inputKey, label, acEdit, defaultValue } = props;

  const { validate, required, adjacent, maxLength, valueType } = configForm.inputs[inputKey];

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

  const HocRowInput = (
    <Row>
      <Label data-aria-required={required}>
        <span>{text(label)}</span>
        <WrapBlock>
          <Comp
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
      </Label>
      <SpanError {...{ error }} />
      <Success is={!error && touched} />
    </Row>
  );

  return HocRowInput;
};

export default withRowInput;
