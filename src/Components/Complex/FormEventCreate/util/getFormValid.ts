import { IInitial as IInitalCreateEvent } from 'src/store/eventCreate/_initialState';
import { IConfigFieldset } from 'src/types';

import getFlatAdjacent from 'src/util/getFlatAdjacent';

import { getEachValid } from 'src/Components/Common/Validate/Validate';

import { configFieldset as configFieldsetAbout } from '../FieldsetAbout';
import { configFieldset as configFieldsetCoordinator } from '../FieldsetCoordinator';
import { configFieldset as configFieldsetWhen } from '../FieldsetWhen';

const getFormValid = (eventCreate: IInitalCreateEvent) => {
  const allFieldsets: IConfigFieldset = {
    ...configFieldsetAbout,
    ...configFieldsetCoordinator,
    ...configFieldsetWhen
  };

  const flatAdjacent = getFlatAdjacent(allFieldsets);
  const combined = { ...allFieldsets, ...flatAdjacent };

  const isAllValid: boolean = Object.keys(combined).every(inputKey =>
    getEachValid({ inputKey, obj: combined[inputKey], eventCreate })
  );

  return isAllValid;
};

export default getFormValid;
