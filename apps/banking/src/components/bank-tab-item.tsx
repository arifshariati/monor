'use client';
import { Account } from '../types/account';
import { useRouter, useSearchParams } from 'next/navigation';
import { formUrlQuery } from '../lib/utils';
import { cn } from '@monor/utils/tailwind/cn';

type BankTabItemProps = { account: Account; appwriteItemId?: string };

const BankTabItem = ({ account, appwriteItemId }: BankTabItemProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isActive = appwriteItemId === account.appwriteItemId;

  const handleTabChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'id',
      value: account.appwriteItemId,
    });
    router.push(newUrl, { scroll: false });
  };

  return <div onClick={handleTabChange}>{account.name}</div>;
};

export default BankTabItem;
