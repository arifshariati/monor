import { getLoggedInUsers } from '../../actions/auth.actions';
import PageHeader from '../../components/page-header';
import SummaryChart from '../../components/summary-chart';
import UserProfileRight from '../../components/user-profile-right';

const RootPage = async () => {
  const userDetails = await getLoggedInUsers();
  if (!userDetails) return;
  return (
    <div className="flex gap-4">
      <div className="flex flex-col">
        <PageHeader
          type="greeting"
          title="Welcome"
          subtext="Manage your transactions effeciently"
          user={userDetails?.name}
        />
        <SummaryChart accounts={[]} totalBanks={5} totalCurrentBalance={5400} />
      </div>
      <div className="ml-auto">
        <UserProfileRight user={userDetails} />
      </div>
    </div>
  );
};

export default RootPage;
