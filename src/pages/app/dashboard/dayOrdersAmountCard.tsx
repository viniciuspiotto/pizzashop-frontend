import { Utensils } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">6</span>
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-emerald-500 dark:text-emerald-400">
            +7%
          </span>{" "}
          em relacao a ontem
        </p>
      </CardContent>
    </Card>
  );
}

export default DayOrdersAmountCard;
