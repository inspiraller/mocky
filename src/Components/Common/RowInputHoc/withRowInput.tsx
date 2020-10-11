import React, { FC } from 'react';

import getAriaExpands from 'src/Components/Common/RowType/util/getAriaExpands';

import RowBlockStyle from 'src/Components/Common/Row/RowBlockStyle';
import RowInlineStyle from 'src/Components/Common/Row/RowInlineStyle';

import { IRowType } from 'src/Components/Common/RowType/RowType';

const RowBlock = RowBlockStyle();
const RowInline = RowInlineStyle();

const withRowInput = (Comp: FC<IRowType>): FC<IRowType> => props => {
  const { inputKey, inputProps, eventCreate } = props;
  const { inline, ariaExpandedBy } = inputProps;

  const Row = inline ? RowInline : RowBlock;

  const ariaExpands = getAriaExpands({ inputKey, ariaExpandedBy, eventCreate });
  const inputPropsAugmentRequired = {
    ...inputProps,
    required: inputProps.required && !!ariaExpands
  };

  const HocRowInput = (
    <Row {...ariaExpands}>{<Comp {...{ ...props, inputProps: inputPropsAugmentRequired }} />}</Row>
  );

  return HocRowInput;
};

export default withRowInput;
