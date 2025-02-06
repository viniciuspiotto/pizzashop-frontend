import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { getDailyRevenueInPeriod } from "@/api/getDailyRevenueInPeriod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";

const chartConfig = {
  revenue: {
    label: "Receita",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

import { subDays } from "date-fns";

function RevenueChart() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  });

  const { data: dailyRevenueInPeriod } = useQuery({
    queryKey: ["metrics", "dailyRevenueInPeriod", dateRange],
    queryFn: () =>
      getDailyRevenueInPeriod({
        from: dateRange?.from,
        to: dateRange?.to,
      }),
  });

  const chartDate = useMemo(() => {
    return dailyRevenueInPeriod?.map((item) => {
      return {
        ...item,
        receipt: item.receipt / 100,
      };
    });
  }, [dailyRevenueInPeriod]);

  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle className="text-base font-medium">
            Receita semanal
          </CardTitle>
        </div>
        <DatePickerWithRange date={dateRange} onDateChange={setDateRange} />
      </CardHeader>
      {chartDate && (
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartDate}
              margin={{
                left: 20,
                right: 20,
                top: 12,
                bottom: 12,
              }}
            >
              <CartesianGrid
                vertical={false}
                stroke="var(--muted-foreground)"
                className="stroke-muted-foreground/40"
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Line
                dataKey={"receipt"}
                type={"monotone"}
                stroke="var(--color-revenue)"
                strokeWidth={1}
                dot={{
                  fill: "var(--color-revenue)",
                }}
                activeDot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      )}
    </Card>
  );
}

export default RevenueChart;
