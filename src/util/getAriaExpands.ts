import { IInitial } from 'src/store/eventCreate/_initialState';
import { IConfigFieldsetItemProps } from 'src/types';

interface IAriaExpands {
  'aria-expanded': boolean;
  'data-aria-parent': string; // not required but useful from development perspective.
}

export type TAriaExpands = IAriaExpands | null | undefined;

type TgetAriaExpandsAttr = (props: {
  inputKey: string;
  ariaExpandedBy?: IConfigFieldsetItemProps['ariaExpandedBy'];
  eventCreate?: IInitial;
}) => TAriaExpands;

export const getAriaExpandsAttr: TgetAriaExpandsAttr = ({
  inputKey,
  ariaExpandedBy,
  eventCreate
}) => {
  if (ariaExpandedBy && eventCreate) {
    const { id, condition } = ariaExpandedBy;
    return {
      'data-aria-parent': inputKey,
      'aria-expanded': eventCreate[id] === condition
    };
  }
  return null;
};

export const getAriaExpandsRequired = (
  ariaExpands: TAriaExpands,
  required: IConfigFieldsetItemProps['required']
) =>
  ariaExpands !== null && ariaExpands !== undefined
    ? ariaExpands['aria-expanded'] && required
    : required;
