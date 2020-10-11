import InputStyle from 'src/Components/Common/Input/InputStyle';
import withLabelInput from './withLabelInput';
import withRowInput from './withRowInput';

const Input = InputStyle();
const LabelInput = withLabelInput(Input);

export default withRowInput(LabelInput);
