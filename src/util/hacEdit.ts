import { TacEdit } from 'src/store/eventCreate/actions';
import { TAnyTestFunc, TAnyHook } from 'src/types';

import convertValue from './convertValue';

// jest.fn<void, any>(setInputMock);
// jest.fn<void, any>(setInputMock);

interface IHackEdit {
  setInput: TAnyHook;
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
