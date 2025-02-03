import { Utensils } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function MonthOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mes)</CardTitle>
        <Utensils className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">73</span>
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-red-500 dark:text-red-400">
            -1%
          </span>{" "}
          em relacao ao mes passado
        </p>
      </CardContent>
    </Card>
  );
}

export default MonthOrdersAmountCard;
