import { ChartConfig } from "@/components/ui/chart";

type PopularProduct = {
  product: string;
  amount: number;
};

export function prepareChart(popularProducts: PopularProduct[]) {
  const chartData = popularProducts.map((product, i) => ({
    type: `pizza${i}`,
    amount: product.amount,
    fill: `var(--color-pizza${i})`,
  }));

  const chartConfig = {
    pizzasAmount: {
      label: "Quantidade de pizzas",
    },

    ...popularProducts.reduce((acc, item, i) => {
      acc[`pizza${i}`] = {
        label: item.product,
        color: `hsl(var(--chart-${i + 1}))`,
      };
      return acc;
    }, {} as ChartConfig),
  };

  return { chartData, chartConfig };
}
