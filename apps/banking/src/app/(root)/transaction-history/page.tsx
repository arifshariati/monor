import { getLoggedInUsers } from '../../../actions/auth.actions';
import { getAccount, getAccounts } from '../../../actions/bank.actions';
import { formatAmount } from '../../../lib/utils';
import PageHeader from '../../../components/page-header';
import TransactionsTable from '../../../components/transactions-table';
import Pagination from '../../../components/pagination';

type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const TransactionHistoryPage = async ({
  searchParams: { id, page },
}: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const userDetails = await getLoggedInUsers();
  const accounts = await getAccounts({
    userId: userDetails.$id,
  });

  if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  const rowsPerPage = 10;
  const totalPages = Math.ceil(account?.transactions.length / rowsPerPage);

  const indexOfLastTransaction = currentPage * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

  const currentTransactions = account?.transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full items-center">
        <PageHeader
          title="Bank accounts"
          subtext="Effortlessly manage your bank accounts."
        />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4 rounded-lg bg-gradient-to-tr from-purple-400 to-purple-950 px-4 py-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-accent">
              {account?.data.name}
            </h2>
            <p className="text-14 text-accent">{account?.data.officialName}</p>
            <p className="text-14 font-semibold tracking-[1.1px] text-accent">
              ●●●● ●●●● ●●●● {account?.data.mask}
            </p>
          </div>

          <div className="flex-center flex-col  gap-2 rounded-md bg-blue-25/20 px-4 py-2 text-white">
            <p className="text-14">Current balance</p>
            <p className="text-24 text-center font-bold">
              {formatAmount(account?.data.currentBalance)}
            </p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-6">
          <TransactionsTable transactions={currentTransactions} />
          {totalPages > 1 && (
            <div className="my-4 w-full">
              <Pagination totalPages={totalPages} page={currentPage} />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default TransactionHistoryPage;
