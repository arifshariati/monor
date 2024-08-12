import PageHeader from '../../components/page-header';
import SummaryChart from '../../components/summary-chart';

export default function Index() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col">
        <PageHeader
          type="greeting"
          title="Welcome"
          subtext="Manage your transactions effeciently"
          user="Arif"
        />
        <SummaryChart accounts={[]} totalBanks={5} totalCurrentBalance={5400} />
      </div>
      {/* right section */}
      <div className="ml-auto">Right Section</div>
    </div>
  );
}
