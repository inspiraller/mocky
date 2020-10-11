import React from 'react';
import TextareaStyle from 'src/Components/Common/Textarea/TextareaStyle';

const Textarea = TextareaStyle();

export const TextareaStyled = () => (
  <Textarea defaultValue="simple" placeholder="enter text here" />
);

export default TextareaStyled;
