import PageHeader from '../../../components/page-header';
import PlaidLink from '../../../components/plaid-link';
import { getLoggedInUsers } from '../../../actions/auth.actions';

const MyBanksPage = async () => {
  const userDetails = await getLoggedInUsers();
  if (!userDetails) return;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full items-center">
        <PageHeader
          title="Bank accounts"
          subtext="Effortlessly manage your bank accounts."
        />
        <PlaidLink user={userDetails} />
      </div>
    </div>
  );
};

export default MyBanksPage;
