import { TLitVal } from 'src/store/eventCreate/_initialState';
import hacEdit from 'src/util/hacEdit';

const inputKey: string = 'someNumber';
const value: TLitVal = '100';

let updatedValue: TLitVal;

const mockFn = {
  acEdit: (payload: { [key: string]: TLitVal }) => {
    updatedValue = payload.someNumber;
  },
  setInput: (val: string) => {
    updatedValue = val;
  }
};

const setInput = jest.spyOn(mockFn, 'setInput');
const acEdit = jest.spyOn(mockFn, 'acEdit');

describe('hacEdit', () => {
  describe('setInput', () => {
    beforeAll(() => {
      updatedValue = '';
      jest.clearAllMocks(); // NOT - jest.restAllMocks() - because this removes implementation.
      hacEdit({
        setInput: mockFn.setInput,
        inputKey,
        value,
        valueType: 'number'
      });
    });
    it('should have called setInput if acEdit does not exist', () => {
      expect(setInput).toHaveBeenCalledTimes(1);
    });
    it('should NOT call acEdit', () => {
      expect(acEdit).toHaveBeenCalledTimes(0);
    });
    it('updatedValue should NOT have been converted', () => {
      expect(typeof updatedValue).toBe('string');
    });
    it('updatedValue be "100"', () => {
      expect(updatedValue).toBe('100');
    });
  });
  describe('acEdit', () => {
    beforeAll(() => {
      updatedValue = '';
      jest.clearAllMocks(); // NOT - jest.restAllMocks() - because this removes implementation.
      hacEdit({
        acEdit: mockFn.acEdit,
        setInput: mockFn.setInput,
        inputKey,
        value,
        valueType: 'number'
      });
    });
    it('SHOULD have called acEdit IF exist', () => {
      expect(acEdit).toHaveBeenCalledTimes(1);
    });
    it('should NOT call setInput', () => {
      expect(setInput).toHaveBeenCalledTimes(0);
    });
    it('updatedValue SHOULD  have been converted', () => {
      expect(typeof updatedValue).toBe('number');
    });
    it('updatedValue be 100', () => {
      expect(updatedValue).toBe(100);
    });
  });
});
