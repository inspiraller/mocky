import { TLitVal } from 'src/types';

const convertValue = (value: string, valueType: string | undefined): TLitVal => {
  if (valueType === 'number') {
    return Number(value);
  } else if (valueType === 'boolean') {
    return value === 'true';
  }
  return value; // will always be string from html
};

export default convertValue;
