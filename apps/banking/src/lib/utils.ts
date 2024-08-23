export const extractCustomerIdFromUrl = (url: string) => url.split('/').pop();
export const encryptId = (id: string): string =>
  Buffer.from(id, 'utf-8').toString('base64');
