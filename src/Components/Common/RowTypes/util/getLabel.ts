type TgetLabel = (
  inputKey: string,
  label?: string | boolean
) => {
  isLabel: boolean;
  label: string;
};

const getLabel: TgetLabel = (inputKey, label) => ({
  isLabel: label !== false,
  label: label ? String(label) : inputKey
});

export default getLabel;
