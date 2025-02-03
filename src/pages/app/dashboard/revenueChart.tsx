import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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

const chartData = [
  { date: "10/12", revenue: 1200 },
  { date: "11/12", revenue: 750 },
  { date: "12/12", revenue: 400 },
  { date: "13/12", revenue: 820 },
  { date: "14/12", revenue: 710 },
  { date: "15/12", revenue: 300 },
  { date: "16/12", revenue: 650 },
];

const chartConfig = {
  revenue: {
    label: "Receita",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

function RevenueChart() {
  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="text-base font-medium">Receita semanal</CardTitle>
        <CardDescription>10/12 - 16/12</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
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
              dataKey={"revenue"}
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
    </Card>
  );
}

export default RevenueChart;
