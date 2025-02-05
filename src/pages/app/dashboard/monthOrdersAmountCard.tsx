import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";

import { getMonthOrdersAmount } from "@/api/getMonthOrdersAmount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function MonthOrdersAmountCard() {
  const { data: monthOrdersAmount } = useQuery({
    queryKey: ["metrics", "month-orders-amount"],
    queryFn: getMonthOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mes)</CardTitle>
        <Utensils className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrdersAmount.amount}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                  +{monthOrdersAmount.diffFromLastMonth}%
                </span>
              ) : (
                <span className="font-semibold text-red-500 dark:text-red-400">
                  {monthOrdersAmount.diffFromLastMonth}%
                </span>
              )}{" "}
              em relacao ao mes passado
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default MonthOrdersAmountCard;
