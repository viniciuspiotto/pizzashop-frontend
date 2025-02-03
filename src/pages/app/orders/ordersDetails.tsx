import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function OrdersDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 189237812738</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  Vinicius Henrique Piotto Boiago
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">(16) 98256-1913</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Email</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  viniciuspiotto.dev@gmail.com
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado ha
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">ha 15 minutos</div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preco</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Peperroni</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 46.99</TableCell>
              <TableCell className="text-right">R$ 93.98</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Mussarrela</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$ 42.99</TableCell>
              <TableCell className="text-right">R$ 83.98</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right text-green-600">
                R$ 176.96
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}

export default OrdersDetails;
