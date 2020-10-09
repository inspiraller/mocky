import React, { FC, useState, InputHTMLAttributes } from 'react';
import text from 'src/Main/text';
import RowStyle from 'src/Components/Common/Row/RowStyle';
import LabelStyle from 'src/Components/Common/Label/LabelStyle';
import SpanAdjacentStyle from 'src/Components/Common/SpanAdjacent/SpanAdjacentStyle';
import WrapBlockStyle from 'src/Components/Common/WrapBlock/WrapBlockStyle';
import CharCount from 'src/Components/Common/CharCount/CharCount';

import { validateAll, SpanError, Success } from 'src/Components/Common/Validate/Validate';
import { IFormState } from 'src/Components/Complex/FormLayout/index';

type TElementType = HTMLInputElement | HTMLTextAreaElement;
type TInputChange = React.ChangeEvent<TElementType>;

interface IField {
  formState: IFormState;
  label: string;
}

const Row = RowStyle();
const Label = LabelStyle();
const SpanAdjacent = SpanAdjacentStyle();
const WrapBlock = WrapBlockStyle();

const withRowInput = (Comp: FC<InputHTMLAttributes<TElementType>>): FC<IField> => props => {
  const { formState, label } = props;
  const { validate, required, adjacent, maxLength, defaultValue } = formState.inputs[label];

  const [input, setInput] = useState(defaultValue || '');
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

  const onChange = (evt: TInputChange) => {
    setInput(evt.target.value);
  };

  const updateErrors = (value: string) => {
    setTouched(true);
    setError(validateAll({ validate, required, label, value }));
  };

  const onBlur = (evt: TInputChange) => {
    updateErrors(evt.target.value);
  };

  const HocRowInput = (
    <Row>
      <Label data-aria-required={required}>
        <span>{text(label)}</span>
        <WrapBlock>
          <Comp
            onChange={onChange}
            onBlur={onBlur}
            name={label}
            placeholder={text(label)}
            aria-required={required ? 'true' : 'false'}
            aria-invalid={error ? 'true' : 'false'}
            data-touched={touched ? 'true' : 'false'}
            aria-label={text(label)}
            maxLength={maxLength}
            type="text"
            value={input}
            data-adjacent={adjacent}
          />
          <CharCount {...{ maxLength, chars: String(input).length }} />
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
