// This file contains common utils for JS

export const stringify = (value: any, spacing = 2) =>
  JSON.stringify(value, null, 2);

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const stringFirstLetterCapital = (str: string) => {
  if (!str.length) return '';
  return str.charAt(0).toUpperCase();
};
