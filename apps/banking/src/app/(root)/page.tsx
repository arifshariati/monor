import { getLoggedInUsers } from '../../actions/auth.actions';
import { getAccount, getAccounts } from '../../actions/bank.actions';
import PageHeader from '../../components/page-header';
import RecentTransactions from '../../components/recent-transactions';
import SummaryChart from '../../components/summary-chart';

type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const RootPage = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const userDetails = await getLoggedInUsers();
  if (!userDetails) return;

  const accounts = await getAccounts({ userId: userDetails.$id });
  if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  return (
    <div className="flex gap-4">
      <div className="flex flex-col flex-1">
        <PageHeader
          type="greeting"
          title="Welcome"
          subtext="Manage your transactions effeciently"
          user={userDetails?.name}
        />
        <SummaryChart
          accounts={accountsData}
          totalBanks={accounts?.totalBanks}
          totalCurrentBalance={accounts?.totalCurrentBalance}
        />
        <RecentTransactions
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
    </div>
  );
};

export default RootPage;
