import convertValue from 'src/util/convertValue';

describe('convertValue', () => {
  it('should covert string to string', () => {
    const value = convertValue('true', 'string');
    expect(typeof value).toBe('string');
  });
  it('should covert string to boolean', () => {
    const value = convertValue('true', 'boolean');
    expect(typeof value).toBe('boolean');
  });
  it('should covert string to number', () => {
    const value = convertValue('68', 'number');
    expect(typeof value).toBe('number');
  });
});
