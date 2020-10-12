import { TValidate } from 'src/Components/Common/Validate/Validate';
import { TLitVal } from 'src/store/eventCreate/_initialState';

export type Toptions = Array<{ name: string; value: string | number | boolean }>;
export type Toptgroups = { [key: string]: Toptions };

export interface IConfigFieldsetInputProps {
  label?: string;
  isLabel?: boolean;
  type?: string;
  validate?: TValidate;
  required?: boolean;
  options?: Toptions;
  optgroups?: Toptgroups;
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
  [key: string]: IConfigFieldsetInputProps;
}

export type TAnyTestFunc = (payload: any) => void;

export type TAnyHook = React.Dispatch<React.SetStateAction<TLitVal | undefined>> | TAnyTestFunc;
