import getDefaultValueAnyType from 'src/Components/Common/RowType/util/getDefaultValueAnyType';

describe('getDefaultValueAnyType', () => {
  it('should get empty string', () => {
    const value = getDefaultValueAnyType('string');
    expect(value).toBe('');
  });
  it('should get -1', () => {
    const value = getDefaultValueAnyType('number');
    expect(value).toBe(-1);
  });
  it('should get boolean', () => {
    const value = getDefaultValueAnyType('boolean');
    expect(value).toBe(false);
  });
});
