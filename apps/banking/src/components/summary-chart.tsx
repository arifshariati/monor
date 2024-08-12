import { Account } from '../types/account';
import { SampleDonutChart } from '@monor/ui/chart/donut';

type SummaryChartProps = {
  accounts: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
};

const SummaryChart = ({
  accounts,
  totalBanks,
  totalCurrentBalance,
}: SummaryChartProps) => {
  return <SampleDonutChart />;
};

export default SummaryChart;
