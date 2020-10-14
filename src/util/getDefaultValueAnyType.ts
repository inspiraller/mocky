import { TLitVal } from 'src/types';

const getDefaultValueAnyType = (valueType: string | undefined): TLitVal => {
  if (valueType === 'number') {
    return -1;
  } else if (valueType === 'boolean') {
    return false;
  }
  return '';
};

export default getDefaultValueAnyType;
