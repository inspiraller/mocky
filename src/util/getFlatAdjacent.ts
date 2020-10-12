import { IConfigFieldset } from 'src/types';

export const getFlatAdjacent = (configFieldset: IConfigFieldset) =>
  Object.keys(configFieldset).reduce((accum, inputKey) => {
    const { adjacent } = configFieldset[inputKey];
    const adjacentObj = typeof adjacent === 'object' ? adjacent : {};
    return { ...accum, ...adjacentObj };
  }, {} as IConfigFieldset);

export default getFlatAdjacent;
