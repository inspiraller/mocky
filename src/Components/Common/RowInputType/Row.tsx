import React, { FC } from 'react';

import { TAriaExpands } from 'src/util/getAriaExpands';

import RowBlockStyle from 'src/Components/Common/Row/RowBlockStyle';
import RowInlineStyle from 'src/Components/Common/Row/RowInlineStyle';

const RowBlock = RowBlockStyle();
const RowInline = RowInlineStyle();

const Row: FC<{
  inline?: boolean;
  ariaExpandsAttr?: TAriaExpands;
}> = props => {
  const { children, inline, ariaExpandsAttr } = props;
  const RowBlockOrInline = inline ? RowInline : RowBlock;
  return <RowBlockOrInline {...ariaExpandsAttr}>{children}</RowBlockOrInline>;
};

export default Row;
