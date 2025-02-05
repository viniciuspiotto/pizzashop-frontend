import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

import { getMonthRevenue } from "@/api/getMonthRevenue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function MonthRevenueCard() {
  const { data: monthRevenue } = useQuery({
    queryKey: ["metrics", "month-revenue"],
    queryFn: getMonthRevenue,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mes)
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthRevenue && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthRevenue.receipt / 100).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthRevenue.diffFromLastMonth >= 0 ? (
                <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                  +{monthRevenue.diffFromLastMonth}%
                </span>
              ) : (
                <span className="font-semibold text-rose-500 dark:text-rose-400">
                  {monthRevenue.diffFromLastMonth}%
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

export default MonthRevenueCard;
