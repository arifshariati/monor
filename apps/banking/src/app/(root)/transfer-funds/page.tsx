import { getLoggedInUsers } from '../../../actions/auth.actions';
import { getAccounts } from '../../../actions/bank.actions';
import PageHeader from '../../../components/page-header';
import PaymentTransferForm from '../../../components/forms/payment/payment-transfer';

const TransferFundsPage = async () => {
  const userDetails = await getLoggedInUsers();
  if (!userDetails) return;
  const accounts = await getAccounts({
    userId: userDetails.$id,
  });
  if (!accounts) return;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full items-center">
        <PageHeader
          title="Transfer Funds"
          subtext="Please provide any specific details or notes related to the payment transfer"
        />
      </div>
      <div className="space-y-4">
        <PaymentTransferForm accounts={accounts.data} />
      </div>
    </div>
  );
};

export default TransferFundsPage;
