import { TacEdit } from 'src/store/eventCreate/actions';
import { TLitVal } from 'src/store/eventCreate/_initialState';

import convertValue from './convertValue';

// jest.fn<void, any>(setInputMock);
// jest.fn<void, any>(setInputMock);
export type TAnyTestFunc = (payload: any) => void;

interface IHackEdit {
  setInput: React.Dispatch<React.SetStateAction<TLitVal | undefined>> | TAnyTestFunc;
  inputKey: string;
  value: string;
  acEdit?: TacEdit | TAnyTestFunc;
  valueType?: string;
}

type THacEdit = (props: IHackEdit) => void;

// hook or actionCreator Edit.
// Provides flexibility in testing
// Removes dependency of redux during development
const hacEdit: THacEdit = ({ setInput, acEdit, inputKey, value, valueType }) => {
  if (acEdit) {
    const valueConverted = convertValue(value, valueType);
    acEdit({
      [inputKey]: valueConverted
    });
  } else {
    setInput(value);
  }
};

export default hacEdit;
