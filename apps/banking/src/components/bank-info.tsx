'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Landmark } from 'lucide-react';
import { cn } from '@monor/utils/tailwind/cn';
import { formatAmount, formUrlQuery, getAccountTypeColors } from '../lib/utils';
import { Account, AccountTypes } from '../types/account';

type BankInfoProps = {
  account: Account;
  appwriteItemId?: string;
  type: 'full' | 'card';
};

const BankInfo = ({ account, appwriteItemId, type }: BankInfoProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isActive = appwriteItemId === account?.appwriteItemId;

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'id',
      value: account?.appwriteItemId,
    });
    router.push(newUrl, { scroll: false });
  };

  const colors = getAccountTypeColors(account?.type as AccountTypes);

  return (
    <div
      onClick={handleBankChange}
      className="flex px-4 py-2 gap-4 bg-blue-50 rounded-lg"
    >
      <div className="flex items-center justify-center ">
        <div className="flex items-center justify-center bg-blue-100 h-[50px] w-[50px] rounded-lg">
          <Landmark />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{account.name}</h2>
          {type === 'full' && (
            <p className="italic text-sm">{account.subtype}</p>
          )}
        </div>

        <p className="text-2xl font-semibold">
          {formatAmount(account.currentBalance)}
        </p>
      </div>
    </div>
  );
};

export default BankInfo;
