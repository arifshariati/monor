import { redirect } from 'next/navigation';
import { getLoggedInUsers } from '../../actions/auth.actions';
import PageHeader from '../../components/page-header';
import SummaryChart from '../../components/summary-chart';

const RootPage = async () => {
  const loggedIn = await getLoggedInUsers();
  if (!loggedIn) redirect('/sign-in');

  return (
    <div className="flex gap-4">
      <div className="flex flex-col">
        <PageHeader
          type="greeting"
          title="Welcome"
          subtext="Manage your transactions effeciently"
          user={loggedIn.name}
        />
        <SummaryChart accounts={[]} totalBanks={5} totalCurrentBalance={5400} />
      </div>
      {/* right section */}
      <div className="ml-auto">Right Section</div>
    </div>
  );
};

export default RootPage;
