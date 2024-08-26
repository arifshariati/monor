'use client';

import { Label, Pie, PieChart } from 'recharts';
import { Card, CardContent } from '@monor/ui/shadcn/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@monor/ui/shadcn/chart';
import { Account } from '../types/account';

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
  const chartConfig: ChartConfig = {};

  const chartData = accounts.map((account, index) => {
    const name = account.name.toLowerCase().replace(/\s+/g, '_');
    chartConfig[name] = {
      label: name,
      color: `hsl(var(--chart-${index + 1}))`,
    };
    return {
      account: name,
      balance: account.availableBalance,
      fill: `var(--color-${name})`,
    };
  });

  return (
    <Card className="flex flex-col my-4 p-4">
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="balance"
              nameKey="account"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalCurrentBalance}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Balance
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SummaryChart;
