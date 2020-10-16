import React, { FC } from 'react';

import { TLitVal, IConfigFieldsetInputProps } from 'src/types';
import { IInitial } from 'src/store/eventCreate/_initialState';

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

export const getEmpty = (label: string) => `${text(label)} ${text('should not be empty')}`;

export const validateNotEmpty: TValidate = (label, value) =>
  value === 'undefined' || value === '-1' || value === 'null' || value.search(/\S+/) === -1
    ? getEmpty(label)
    : '';

export const validateNotMinus1: TValidate = (label, value) =>
  value === '-1' ? `${text(label)} ${text('should not be empty')}` : '';

export const validateLength: (len: number) => TValidate = len => (label, value) => {
  // value.search(RegExp(`^[\\w\\W]{1,${len}}$`)) === -1
  return value.length > len ? `${text(label)} ${text(`should not exceed ${len} char`)}` : '';
};

export const validateGt0: TValidate = (label, value) =>
  Number(value) <= 1 ? `${text(label)} ${text(`should be greater than 0`)}` : '';

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

type TisValid = (props: {
  eventCreate: IInitial;
  inputKey: string;
  obj: IConfigFieldsetInputProps;
}) => boolean;

export const getRequired = (eventCreate: IInitial, obj: IConfigFieldsetInputProps) => {
  if (!obj.required) {
    return false;
  }
  const { ariaExpandedBy } = obj;

  if (!ariaExpandedBy) {
    return true;
  } else {
    const { id, condition } = ariaExpandedBy;
    if (eventCreate[id] === condition) {
      return true;
    }
  }
  return false;
};

export const getEachValid: TisValid = ({ eventCreate, inputKey, obj }) => {
  const required = getRequired(eventCreate, obj);
  const value = eventCreate[inputKey];

  const error = validateAll({
    label: '',
    value: String(value),
    validate: obj.validate,
    required,
    maxLength: obj.maxLength
  });
  return error === '';
};
