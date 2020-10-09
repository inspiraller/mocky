import React from 'react';

import TextareaStyle from 'src/Components/Common/Textarea/TextareaStyle';

const Textarea = TextareaStyle();

const TextareaBasic = () => <Textarea defaultValue="simple" placeholder="enter text here" />;

export default TextareaBasic;
