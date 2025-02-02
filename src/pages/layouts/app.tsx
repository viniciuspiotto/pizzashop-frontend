import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <h1>app header</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
