import { IConfigFieldset } from 'src/types';
import getFlatAdjacent from './getFlatAdjacent';

export type TJustRequired = string[];

const getRequired = (configFieldset: IConfigFieldset): TJustRequired => {
  const flatAdjacent: IConfigFieldset = getFlatAdjacent(configFieldset);
  const combined: IConfigFieldset = { ...flatAdjacent, ...configFieldset };
  const result: TJustRequired = Object.keys(combined).reduce((accum, inputKey) => {
    if (combined[inputKey].required) {
      accum.push(inputKey);
    }
    return accum;
  }, [] as TJustRequired);
  return result;
};
export default getRequired;
