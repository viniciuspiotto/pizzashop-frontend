type OrderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatus;
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: "Pendente",
  canceled: "Cancelado",
  processing: "Em preparo",
  delivering: "Em entrega",
  delivered: "Entregado",
};

function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <span className="size-2 rounded-full bg-slate-400" />
      )}
      {status === "canceled" && (
        <span className="size-2 rounded-full bg-rose-400" />
      )}
      {status === "processing" && (
        <span className="size-2 rounded-full bg-sky-400" />
      )}
      {status === "delivering" && (
        <span className="size-2 rounded-full bg-yellow-400" />
      )}
      {status === "delivered" && (
        <span className="size-2 rounded-full bg-emerald-400" />
      )}
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  );
}

export default OrderStatus;
