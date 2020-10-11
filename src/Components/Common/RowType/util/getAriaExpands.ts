import { IInitial } from 'src/store/eventCreate/_initialState';
import { IConfigFieldsetItemProps } from 'src/types';

type TgetDepends = (props: {
  inputKey: string;
  ariaExpandedBy?: IConfigFieldsetItemProps['ariaExpandedBy'];
  eventCreate?: IInitial;
}) => {
  'aria-expanded': boolean;
  'data-aria-parent': string; // not required but useful from development perspective.
} | null;

const getAriaExpands: TgetDepends = ({ inputKey, ariaExpandedBy, eventCreate }) => {
  if (ariaExpandedBy && eventCreate) {
    const { id, condition } = ariaExpandedBy;
    return {
      'data-aria-parent': inputKey,
      'aria-expanded': eventCreate[id] === condition
    };
  }
  return null;
};
export default getAriaExpands;
