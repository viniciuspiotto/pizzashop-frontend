import { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const chartData = [
  { type: "calabresa", amount: 23, fill: "var(--color-pepperoni)" },
  { type: "portuguesa", amount: 18, fill: "var(--color-portuguese)" },
  { type: "marguerita", amount: 18, fill: "var(--color-margherita)" },
  {
    type: "frango com catupiry",
    amount: 16,
    fill: "var(--color-chickenCatupiry)",
  },
  {
    type: "banana com canela",
    amount: 12,
    fill: "var(--color-bananaCinnamon)",
  },
];

const chartConfig = {
  pizzas: {
    label: "Pizzas vendidas",
  },
  pepperoni: {
    label: "Portuguesa",
    color: "hsl(var(--chart-1))",
  },
  portuguese: {
    label: "Marguerita",
    color: "hsl(var(--chart-2))",
  },
  margherita: {
    label: "Frango com Catupiry",
    color: "hsl(var(--chart-3))",
  },
  chickenCatupiry: {
    label: "banana com canela",
    color: "hsl(var(--chart-4))",
  },
  bananaCinnamon: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

function FavoriteProductPieChart() {
  const totalPizzas = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0);
  }, []);

  return (
    <Card className="col-span-2 flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pizzas mais pedidas</CardTitle>
        <CardDescription>Janeiro - Fevereiro 2025</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip />
            <Pie
              data={chartData}
              dataKey={"amount"}
              nameKey={"type"}
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
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
                          {totalPizzas.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Pizzas
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
      <CardFooter>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead className="text-center">Sabor</TableHead>
              <TableHead className="text-center">Preco</TableHead>
              <TableHead className="text-center">Qtd.</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-bold text-chart-1">1</TableCell>
              <TableCell className="text-center">Calabresa</TableCell>
              <TableCell className="text-center">R$ 42.90</TableCell>
              <TableCell className="text-center">23</TableCell>
              <TableCell className="text-right">R$ 986.70</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold text-chart-2">2</TableCell>
              <TableCell className="text-center">Portuguesa</TableCell>
              <TableCell className="text-center">R$ 42.90</TableCell>
              <TableCell className="text-center">18</TableCell>
              <TableCell className="text-right">R$ 736.80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold text-chart-3">3</TableCell>
              <TableCell className="text-center">Marguerita</TableCell>
              <TableCell className="text-center">R$ 42.90</TableCell>
              <TableCell className="text-center">18</TableCell>
              <TableCell className="text-right">R$ 736.80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold text-chart-4">4</TableCell>
              <TableCell className="text-center">Frango com Catupiry</TableCell>
              <TableCell className="text-center">R$ 42.90</TableCell>
              <TableCell className="text-center">16</TableCell>
              <TableCell className="text-right">R$ 696.80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold text-chart-5">5</TableCell>
              <TableCell className="text-center">Banana com Canela</TableCell>
              <TableCell className="text-center">R$ 38.80</TableCell>
              <TableCell className="text-center">12</TableCell>
              <TableCell className="text-right">R$ 420.60</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="text-right font-bold text-emerald-500 dark:text-emerald-400">
                R$ 1890.90
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardFooter>
    </Card>
  );
}

export default FavoriteProductPieChart;
