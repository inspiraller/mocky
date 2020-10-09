import { TacEdit } from 'src/store/eventCreate/actions';
import { TLitVal } from 'src/store/eventCreate/_initialState';

interface IHackEdit {
  setInput: React.Dispatch<React.SetStateAction<TLitVal | undefined>>;
  inputKey: string;
  value: string;
  acEdit?: TacEdit;
  valueType?: string;
}

type THacEdit = (props: IHackEdit) => void;

const convertValue = (value: string, valueType: string | undefined): TLitVal => {
  if (valueType === 'number') {
    return Number(value);
  } else if (valueType === 'boolean') {
    return value === 'true';
  }
  return value; // will always be string from html
};

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
