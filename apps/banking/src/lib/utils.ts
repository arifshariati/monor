import qs from 'query-string';
import { AccountTypes } from '../types/account';
export const extractCustomerIdFromUrl = (url: string) => url.split('/').pop();
export const encryptId = (id: string): string =>
  Buffer.from(id, 'utf-8').toString('base64');

type FormUrlQueryProps = { params: string; key: string; value: string };
export const formUrlQuery = ({ params, key, value }: FormUrlQueryProps) => {
  const currentUrl = qs.parse(params);
  currentUrl[key] = value;

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true }
  );
};

export const getAccountTypeColors = (type: AccountTypes) => {
  switch (type) {
    case 'depository':
      return {
        bg: 'bg-blue-25',
        lightBg: 'bg-blue-100',
        title: 'text-blue-900',
        subText: 'text-blue-700',
      };

    case 'credit':
      return {
        bg: 'bg-success-25',
        lightBg: 'bg-success-100',
        title: 'text-success-900',
        subText: 'text-success-700',
      };

    default:
      return {
        bg: 'bg-green-25',
        lightBg: 'bg-green-100',
        title: 'text-green-900',
        subText: 'text-green-700',
      };
  }
};

export const formatAmount = (amount: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
};

export const getTransactionStatus = (date: Date) => {
  const today = new Date();
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  return date > twoDaysAgo ? 'Processing' : 'Success';
};

export const removeSpecialCharacters = (value: string) =>
  value.replace(/[^\w\s]/gi, '');

export const formatDateTime = (dateString: Date) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
    month: 'short', // abbreviated month name (e.g., 'Oct')
    day: 'numeric', // numeric day of the month (e.g., '25')
    hour: 'numeric', // numeric hour (e.g., '8')
    minute: 'numeric', // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
    year: 'numeric', // numeric year (e.g., '2023')
    month: '2-digit', // abbreviated month name (e.g., 'Oct')
    day: '2-digit', // numeric day of the month (e.g., '25')
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'short', // abbreviated month name (e.g., 'Oct')
    year: 'numeric', // numeric year (e.g., '2023')
    day: 'numeric', // numeric day of the month (e.g., '25')
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric', // numeric hour (e.g., '8')
    minute: 'numeric', // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const formattedDateTime: string = new Date(dateString).toLocaleString(
    'en-US',
    dateTimeOptions
  );

  const formattedDateDay: string = new Date(dateString).toLocaleString(
    'en-US',
    dateDayOptions
  );

  const formattedDate: string = new Date(dateString).toLocaleString(
    'en-US',
    dateOptions
  );

  const formattedTime: string = new Date(dateString).toLocaleString(
    'en-US',
    timeOptions
  );

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};
