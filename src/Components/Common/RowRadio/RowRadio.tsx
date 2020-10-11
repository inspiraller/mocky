import React, { FC } from 'react';

import RowBlockStyle from 'src/Components/Common/Row/RowBlockStyle';
import RowInlineStyle from 'src/Components/Common/Row/RowInlineStyle';

import { IRowType } from 'src/Components/Common/RowType/RowType';

import LabelRadios from './LabelRadios';

const RowBlock = RowBlockStyle();
const RowInline = RowInlineStyle();

const RowRadio: FC<IRowType> = ({ inputProps, ...theRest }) => {
  const { inline } = inputProps;

  const Row = inline ? RowInline : RowBlock;

  return (
    <Row>
      <LabelRadios
        {...{
          ...theRest,
          inputProps
        }}
      />
    </Row>
  );
};

export default RowRadio;
