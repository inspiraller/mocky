import React, { FC } from 'react';

import { TLitVal, IConfigFieldsetInputProps } from 'src/types';

import text from 'src/Main/text';
import InputErrorStyle from 'src/Components/Common/Input/InputErrorStyle';
import CheckIconStyle from 'src/Components/Common/CheckIcon/CheckIconStyle';

const CheckIcon = CheckIconStyle();
const InputError = InputErrorStyle();

export const SpanError: FC<{ error: string }> = ({ error }) =>
  error ? <InputError role="alert">{error}</InputError> : null;

export const Success: FC<{ is: boolean; required?: boolean }> = ({ is, required }) =>
  is && required ? <CheckIcon /> : null;

export type TValidate = (label: string, value: string) => string;

export const validateNotEmpty: TValidate = (label, value) =>
  value.search(/\S+/) === -1 ? `${text(label)} ${text('should not be empty')}` : '';

export const validateNotMinus1: TValidate = (label, value) =>
  value === '-1' ? `${text(label)} ${text('should not be empty')}` : '';

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
  if (!errorEach && required) {
    errorEach = validateNotMinus1(label, value);
  }
  if (!errorEach && maxLength) {
    errorEach = validateLength(maxLength)(label, value);
  }
  if (!errorEach && validate) {
    errorEach = validate(label, value);
  }
  return errorEach;
};

type TisValid = (inputKey: string, obj: IConfigFieldsetInputProps, value: TLitVal) => boolean;

export const getEachValid: TisValid = (inputKey, obj, value) => {
  const error = validateAll({
    label: '',
    value: String(value),
    validate: obj.validate,
    required: obj.required,
    maxLength: obj.maxLength
  });
  return error === '';
};
