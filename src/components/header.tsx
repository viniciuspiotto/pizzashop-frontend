import { Home, Pizza, UtensilsCrossed } from "lucide-react";

import NavLink from "./navLink";
import { ModeToggle } from "./theme/modeToggle";
import { Separator } from "./ui/separator";

function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza />
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={"/"}>
            <Home className="size-4" />
            Inicio
          </NavLink>
          <NavLink to={"/orders"}>
            <UtensilsCrossed className="size-4" />
            Pedidos
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
