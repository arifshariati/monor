import { getLoggedInUsers } from '../../actions/auth.actions';
import { getAccount, getAccounts } from '../../actions/bank.actions';
import PageHeader from '../../components/page-header';
import SummaryChart from '../../components/summary-chart';
import UserProfileRight from '../../components/user-profile-right';

type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const RootPage = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const userDetails = await getLoggedInUsers();
  if (!userDetails) return;

  const accounts = await getAccounts({ userId: userDetails.$id });
  if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  return (
    <div className="flex gap-4">
      <div className="flex flex-col">
        <PageHeader
          type="greeting"
          title="Welcome"
          subtext="Manage your transactions effeciently"
          user={userDetails?.name}
        />
        <SummaryChart
          accounts={accounts}
          totalBanks={accounts?.totalBanks}
          totalCurrentBalance={accounts?.totalCurrentBalance}
        />
      </div>
      <div className="ml-auto">
        <UserProfileRight user={userDetails} />
      </div>
    </div>
  );
};

export default RootPage;
