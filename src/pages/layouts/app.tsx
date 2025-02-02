import { Outlet } from "react-router-dom";

import Header from "@/components/header";

function AppLayout() {
  return (
    <div>
      <Header />
      <div className="g4 flex flex-1 flex-col p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
