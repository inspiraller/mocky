import React, { FC, useState } from 'react';

import RowBlockStyle from 'src/Components/Common/Row/RowBlockStyle';
import RowInlineStyle from 'src/Components/Common/Row/RowInlineStyle';

import { validateAll } from 'src/Components/Common/Validate/Validate';

import { IRowType } from 'src/Components/Common/RowType/RowType';

import hacEdit from '../RowType/util/hacEdit';
import getLabel from '../RowType/util/getLabel';

import LabelSelect from './LabelSelect';

type TInputChange = React.ChangeEvent<HTMLSelectElement>;

const RowBlock = RowBlockStyle();
const RowInline = RowInlineStyle();

const RowSelect: FC<IRowType> = ({ formid, inputKey, inputProps, acEdit, defaultValue }) => {
  const { validate, required, options, valueType, inline, isLabel } = inputProps;

  const label = inputProps.label || inputKey;

  const [input, setInput] = useState(defaultValue);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

  const value = acEdit ? defaultValue : input;

  const updateErrors = (val: string) => {
    setTouched(true);
    setError(validateAll({ validate, required, label, value: val }));
  };

  const onChange = (evt: TInputChange) => {
    hacEdit({ setInput, acEdit, inputKey, value: evt.target.value, valueType });
    updateErrors(evt.target.value);
  };
  const id = `${formid}-${inputKey}`;

  const Row = inline ? RowInline : RowBlock;

  return (
    <Row>
      <LabelSelect
        {...{
          isLabel,
          required,
          id,
          onChange,
          inputKey,
          label,
          error,
          touched,
          value,
          options
        }}
      />
    </Row>
  );
};
export default RowSelect;
