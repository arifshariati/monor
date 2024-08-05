import { truncateString } from './strings';

describe('truncateString', () => {
  it('picks default length if not provided', () => {
    expect(truncateString('hello')).toBe('hello');
  });
  it('return actual string with length less than specified', () => {
    expect(truncateString('hello', 10)).toBe('hello');
  });
  it('truncates string based on provided length', () => {
    expect(truncateString('hello from austin', 5)).toBe('hello...');
  });
});
