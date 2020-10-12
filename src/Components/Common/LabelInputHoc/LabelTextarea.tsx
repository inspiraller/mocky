import TextareaStyle from 'src/Components/Common/Textarea/TextareaStyle';
import withLabelInput from './withLabelInput';

const Textarea = TextareaStyle();
const LabelTextarea = withLabelInput(Textarea);

export default LabelTextarea;
