import InputStyle from 'src/Components/Common/Input/InputStyle';
import withLabelInput from './withLabelInput';

const Input = InputStyle();
const LabelInput = withLabelInput(Input);

export default LabelInput;
