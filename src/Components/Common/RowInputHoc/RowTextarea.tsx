import TextareaStyle from 'src/Components/Common/Textarea/TextareaStyle';
import withLabelInput from './withLabelInput';
import withRowInput from './withRowInput';

const Textarea = TextareaStyle();
const LabelInput = withLabelInput(Textarea);

export default withRowInput(LabelInput);
