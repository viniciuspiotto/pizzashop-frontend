import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";

import { getPopularProducts } from "@/api/getPopularProducts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
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
import { prepareChart } from "@/utils/prepareChart";

function FavoriteProductPieChart() {
  const { data: popularProducts } = useQuery({
    queryKey: ["metrics", "popular-products"],
    queryFn: getPopularProducts,
  });

  const { chartData, chartConfig } = useMemo(() => {
    if (!popularProducts) return { chartData: [], chartConfig: {} };
    return prepareChart(popularProducts);
  }, [popularProducts]);

  const totalPizzas = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0);
  }, [chartData]);

  return (
    <Card className="col-span-2 flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pizzas mais pedidas</CardTitle>
        <CardDescription>Janeiro - Fevereiro 2025</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        {popularProducts ? (
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[300px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel className="gap-2" />}
              />
              <Pie
                data={chartData}
                dataKey="amount"
                nameKey="type"
                innerRadius={70}
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
                            y={(viewBox.cy || 0) - 5}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalPizzas.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 25}
                            className="fill-muted-foreground text-lg"
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
        ) : (
          <div className="flex h-[300px] w-full items-center justify-center">
            <Loader2 className="size-8 animate-spin text-muted-foreground" />
          </div>
        )}
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
