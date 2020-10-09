import { TacEdit } from 'src/store/eventCreate/actions';

interface IHackEdit {
  setInput: React.Dispatch<React.SetStateAction<string | undefined>>;
  label: string;
  value: string;
  acEdit?: TacEdit;
}

type THacEdit = (props: IHackEdit) => void;

// hook or actionCreator Edit.
// Provides flexibility in testing
// Removes dependency of redux during development
const hacEdit: THacEdit = ({ setInput, acEdit, label, value }) => {
  if (acEdit) {
    acEdit({
      [label]: value
    });
  } else {
    setInput(value);
  }
};

export default hacEdit;
