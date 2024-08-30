import Link from 'next/link';
import Image from 'next/image';
import { Account } from '../types/account';
import { formatAmount } from '../lib/utils';
import Copy from './copy';

type BankCardProps = {
  account: Account;
  userName: string;
  showBalance?: boolean;
};

const BankCard = ({ account, userName, showBalance = true }: BankCardProps) => {
  console.log({ account });
  return (
    <div className="flex flex-col">
      <Link
        href={`/transaction-history/?id=${account.appwriteItemId}`}
        className="relative flex h-[190px] w-full max-w-[320px] justify-between rounded-[20px] border border-white bg-gradient-to-tr from-pink-400 to-pink-600 shadow-creditCard backdrop-blur-[6px]"
      >
        <div className="relative z-10 flex size-full max-w-[228px] flex-col justify-between rounded-l-[20px] bg-gradient-to-tr from-pink-950 to-pink-500 px-5 pb-4 pt-5">
          <div>
            <h1 className="text-16 font-semibold text-white">{account.name}</h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">{account?.mask}</span>
            </p>
          </article>
        </div>

        <div className="flex size-full flex-1 flex-col items-end justify-between rounded-r-[20px] bg-gradient-to-tr from-pink-400 to-pink-600 bg-cover bg-center bg-no-repeat py-5 pr-5">
          <Image src="/icons/Paypass.svg" width={20} height={24} alt="pay" />
          <Image
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>

        <Image
          src="/icons/lines.svg"
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
        />
      </Link>

      {showBalance && <Copy title={account?.shareableId} />}
    </div>
  );
};

export default BankCard;
