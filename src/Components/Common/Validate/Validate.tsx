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
  value.search(/\S+/) === -1 ? `${text(label)} ${text('should not be empty')}` : '';

export const validateLength: (len: number) => TValidate = len => (label, value) => {
  // value.search(RegExp(`^[\\w\\W]{1,${len}}$`)) === -1
  return value.length > len ? `${text(label)} ${text(`should not exceed ${len} char`)}` : '';
};

export type IValidateAll = (props: {
  label: string;
  value: string;
  validate?: TValidate;
  required?: boolean;
  maxLength?: number;
}) => string;

export const validateAll: IValidateAll = ({ label, value, validate, required, maxLength }) => {
  let errorEach = '';
  if (!errorEach && required) {
    errorEach = validateNotEmpty(label, value);
  }
  if (!errorEach && maxLength) {
    errorEach = validateLength(maxLength)(label, value);
  }
  if (!errorEach && validate) {
    errorEach = validate(label, value);
  }
  return errorEach;
};
