import { getLoggedInUsers } from '../../../actions/auth.actions';
import { getAccounts } from '../../../actions/bank.actions';
import { Account } from '../../../types/account';
import BankCard from '../../../components/bank-card';
import PageHeader from '../../../components/page-header';
import PlaidLink from '../../../components/plaid-link';

const MyBanksPage = async () => {
  const userDetails = await getLoggedInUsers();
  if (!userDetails) return;

  const accounts = await getAccounts({ userId: userDetails.$id });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full items-center">
        <PageHeader
          title="Bank accounts"
          subtext="Effortlessly manage your bank accounts."
        />
        <PlaidLink user={userDetails} />
      </div>
      <div className="space-y-4">
        <h2 className="text-18 font-semibol">Your cards</h2>
        <div className="flex flex-wrap gap-6">
          {accounts &&
            accounts.data.map((account: Account) => (
              <BankCard
                key={account.id}
                account={account}
                userName={userDetails.name}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyBanksPage;
