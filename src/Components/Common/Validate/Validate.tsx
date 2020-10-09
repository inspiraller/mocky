import React, { FC } from 'react';
import text from 'src/Main/text';
import InputErrorStyle from 'src/Components/Common/Input/InputErrorStyle';
import CheckIconStyle from 'src/Components/Common/CheckIcon/CheckIconStyle';

const CheckIcon = CheckIconStyle();
const InputError = InputErrorStyle();

export const SpanError: FC<{ error: string }> = ({ error }) =>
  error ? <InputError role="alert">{error}</InputError> : null;

export const Success: FC<{ is: boolean }> = ({ is }) => (is ? <CheckIcon /> : null);

export type TValidate = (label: string, value: string) => string;

export const validateNotEmpty: TValidate = (label, value) =>
  value.search(/[\w\W]+/) === -1 ? `${text(label)} ${text('should not be empty')}` : '';
