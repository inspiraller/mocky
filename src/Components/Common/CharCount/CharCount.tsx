import React, { FC } from 'react';
import CharCountStyle from './CharCountStyle';

interface ICharCount {
  chars: number;
  maxLength?: number;
}

const Span = CharCountStyle();

const CharCount: FC<ICharCount> = ({ chars, maxLength }) =>
  maxLength ? <Span>{chars}</Span> : null;

export default CharCount;
