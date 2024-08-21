import { stringFirstLetterCapital } from './js';

describe('stringFirstLetterCapital', () => {
  it('return empty string if passed empty string', () => {
    expect(stringFirstLetterCapital('')).toBe('');
  });

  it('returns first letter in capital', () => {
    expect(stringFirstLetterCapital('arif')).toBe('A');
  });

  it('return first letter in capital with long string', () => {
    expect(stringFirstLetterCapital('King of France')).toBe('K');
  });

  it('return first letter in capital even if first letter is capital already', () => {
    expect(stringFirstLetterCapital('Master of coding')).toBe('M');
  });
});
