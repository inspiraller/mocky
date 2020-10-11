import { TValidate } from 'src/Components/Common/Validate/Validate';
import { TLitVal } from 'src/store/eventCreate/_initialState';

export interface IConfigFieldsetItemProps {
  label?: string;
  isLabel?: boolean;
  type?: string;
  validate?: TValidate;
  required?: boolean;
  options?: Array<{ name: string; value: string | number | boolean }>;
  radios?: Array<{ name: string; value: string | number | boolean }>;
  adjacent?: IConfigFieldset | string;
  maxLength?: number;
  valueType?: string;
  ariaExpands?: string;
  inline?: boolean;
  ariaExpandedBy?: {
    id: string;
    condition: TLitVal;
  };
}

export interface IConfigFieldset {
  [key: string]: IConfigFieldsetItemProps;
}
