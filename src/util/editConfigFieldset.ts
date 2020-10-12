import { IConfigFieldset, Toptgroups, Toptions } from 'src/types';
import { TLitVal } from 'src/store/eventCreate/_initialState';

type TeditConfigFieldset = (props: {
  configFieldset: IConfigFieldset;
  key: string;
  childkey: string;
  val: TLitVal | Toptgroups | Toptions;
}) => IConfigFieldset;

const editConfigFieldset: TeditConfigFieldset = ({ configFieldset, key, childkey, val }) => ({
  ...configFieldset,
  ...{ [key]: { ...configFieldset[key], ...{ [childkey]: val } } }
});

export default editConfigFieldset;
