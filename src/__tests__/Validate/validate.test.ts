import {
  validateNotEmpty,
  validateLength,
  validateAll
} from 'src/Components/Common/Validate/Validate';

describe('Validate', () => {
  describe('validateNotEmpty', () => {
    it('should display error - label1', () => {
      expect(validateNotEmpty('label1', '')).toEqual('label1 should not be empty');
    });
    it('should display error - label2', () => {
      expect(validateNotEmpty('label2', '')).toEqual('label2 should not be empty');
    });
    it('should display error - label1 - if just whitespace', () => {
      expect(validateNotEmpty('label1', '                  ')).toEqual(
        'label1 should not be empty'
      );
    });
    it('should NOT display error - label1', () => {
      expect(validateNotEmpty('label1', 'a')).toEqual('');
    });
    it('should NOT display error - label2', () => {
      expect(validateNotEmpty('label2', 'a')).toEqual('');
    });
  });
  describe('validateLength', () => {
    it('should display error if gt - 10', () => {
      const len = 10;
      expect(validateLength(len)('label1', 'This text is gt than 10 characters long')).toEqual(
        `label1 should not exceed ${len} char`
      );
    });
    it('should NOT display error if === 10', () => {
      const len = 10;
      expect(validateLength(len)('label1', '10 exactly')).toEqual('');
    });
    it('should NOT display error if <= 10', () => {
      const len = 10;
      expect(validateLength(len)('label1', '10 less')).toEqual('');
    });
  });
  describe('validateAll', () => {
    it('should default validatNotEmpty if - required', () => {
      const error = validateAll({
        label: 'label1',
        value: '',
        required: true
      });
      expect(error).toEqual('label1 should not be empty');
    });
    it('should NOT run validate if required fails', () => {
      const error = validateAll({
        label: 'label1',
        value: '',
        required: true,
        validate: validateLength(0)
      });
      expect(error).toEqual('label1 should not be empty');
    });
    it('should NOT validatNotEmpty if NOT - required', () => {
      const error = validateAll({
        label: 'label1',
        value: ''
      });
      expect(error).toEqual('');
    });
    it('should validate maxLength if - required pass', () => {
      const len = 4;
      const error = validateAll({
        label: 'label1',
        value: 'some text that is long than the limit',
        required: true,
        validate: validateLength(len)
      });
      expect(error).toEqual(`label1 should not exceed ${len} char`);
    });
  });
});
