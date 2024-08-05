export const truncateString = (str: string, len = 110): string => {
  if (str.length <= len) return str;
  return str.slice(0, len) + '...';
};
