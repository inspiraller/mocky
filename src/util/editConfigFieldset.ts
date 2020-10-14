import { IConfigFieldset, Toptgroups, Toptions, TLitVal } from 'src/types';

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
