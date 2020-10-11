import React, { FC, useState } from 'react';

import RowBlockStyle from 'src/Components/Common/Row/RowBlockStyle';
import RowInlineStyle from 'src/Components/Common/Row/RowInlineStyle';

import { IRowType } from 'src/Components/Common/RowType/RowType';

import hacEdit from '../RowType/util/hacEdit';
import getLabel from '../RowType/util/getLabel';

import LabelRadios from './LabelRadios';

type TInputChange = React.ChangeEvent<HTMLInputElement>;

const RowBlock = RowBlockStyle();
const RowInline = RowInlineStyle();

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
