import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

import { getMonthCanceledOrdersAmount } from "@/api/getCanceledMonthAmount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import MetricCardSkeleton from "./metricCardSkeleton";

function MonthCanceledOrdersAmountCard() {
  const { data: monthCanceledOrders } = useQuery({
    queryKey: ["metrics", "month-canceled-orders"],
    queryFn: getMonthCanceledOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mes)
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCanceledOrders ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrders.amount}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthCanceledOrders.diffFromLastMonth <= 0 ? (
                <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                  {monthCanceledOrders.diffFromLastMonth}%
                </span>
              ) : (
                <span className="font-semibold text-rose-500 dark:text-rose-400">
                  +{monthCanceledOrders.diffFromLastMonth}%
                </span>
              )}{" "}
              em relacao ao mes passado
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}

export default MonthCanceledOrdersAmountCard;
