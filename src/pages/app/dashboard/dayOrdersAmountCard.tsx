import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";

import { getDayOrdersAmount } from "@/api/getDayOrdersAmount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import MetricCardSkeleton from "./metricCardSkeleton";

function DayOrdersAmountCard() {
  const { data: dayOrdersAmount } = useQuery({
    queryKey: ["metrics", "day-orders-amount"],
    queryFn: getDayOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dayOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersAmount.amount.toLocaleString("pt-BR")}
            </span>
            <p className="text-xs text-muted-foreground">
              {dayOrdersAmount.diffFromYesterday >= 0 ? (
                <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                  +{dayOrdersAmount.diffFromYesterday}%
                </span>
              ) : (
                <span className="font-semibold text-rose-500 dark:text-rose-400">
                  {dayOrdersAmount.diffFromYesterday}%
                </span>
              )}{" "}
              em relacao a ontem
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}

export default DayOrdersAmountCard;
