import { TacEdit } from 'src/store/eventCreate/actions';
import { TLitVal } from 'src/store/eventCreate/_initialState';

import convertValue from './convertValue';

interface IHackEdit {
  setInput: React.Dispatch<React.SetStateAction<TLitVal | undefined>>;
  inputKey: string;
  value: string;
  acEdit?: TacEdit;
  valueType?: string;
}

type THacEdit = (props: IHackEdit) => void;

// hook or actionCreator Edit.
// Provides flexibility in testing
// Removes dependency of redux during development
const hacEdit: THacEdit = ({ setInput, acEdit, inputKey, value, valueType }) => {
  const valueConverted = convertValue(value, valueType);
  if (acEdit) {
    acEdit({
      [inputKey]: valueConverted
    });
  } else {
    setInput(value);
  }
};

export default hacEdit;
