import React, { FC, useState } from 'react';

import RowBlockStyle from 'src/Components/Common/Row/RowBlockStyle';
import RowInlineStyle from 'src/Components/Common/Row/RowInlineStyle';

import { validateAll } from 'src/Components/Common/Validate/Validate';
import { IRowType } from 'src/Components/Common/RowType/RowType';

import hacEdit from '../RowType/util/hacEdit';
import getLabel from '../RowType/util/getLabel';

import { ILabelInput } from './withLabelInput';

type TElementType = HTMLInputElement | HTMLTextAreaElement;
type TInputChange = React.ChangeEvent<TElementType>;

const RowBlock = RowBlockStyle();
const RowInline = RowInlineStyle();

const withRowInput = (Comp: FC<ILabelInput>): FC<IRowType> => props => {
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

  const Row = inline ? RowInline : RowBlock;

  /* Comp === LabelInput */
  const HocRowInput = (
    <Row>
      {
        <Comp
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
