import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Button } from "./ui/button";

interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
}

function Pagination({ pageIndex, totalCount, perPage }: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1;

  return (
    <div className="flex items-center justify-between">
      <span>Total de {totalCount} item(s)</span>
      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Pagina {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant={"outline"} className="size-8 p-0">
            <ChevronsLeft className="size-4" />
            <span className="sr-only">Primeira Pagina</span>
          </Button>
          <Button variant={"outline"} className="size-8 p-0">
            <ChevronLeft className="size-4" />
            <span className="sr-only">Pagina Anterior</span>
          </Button>
          <Button variant={"outline"} className="size-8 p-0">
            <ChevronRight className="size-4" />
            <span className="sr-only">Proxima Pagina</span>
          </Button>
          <Button variant={"outline"} className="size-8 p-0">
            <ChevronsRight className="size-4" />
            <span className="sr-only">Ultima Pagina</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
