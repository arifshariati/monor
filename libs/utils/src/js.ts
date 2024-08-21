// This file contains common utils for JS

export const stringify = (value: any, spacing = 2) =>
  JSON.stringify(value, null, 2);

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));
