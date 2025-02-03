import { ArrowRight, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";

import OrdersDetails from "./ordersDetails";

function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"} size={"xs"}>
              <Search />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrdersDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        812812739102123
      </TableCell>
      <TableCell className="text-muted-foreground">Ha 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">
        Vinicius Henrique Piotto Boiago
      </TableCell>
      <TableCell className="font-medium">R$ 1400,90</TableCell>
      <TableCell>
        <Button variant={"outline"} size={"xs"}>
          <ArrowRight />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant={"ghost"} size={"xs"}>
          <X />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default OrderTableRow;
