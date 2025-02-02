import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div>
      <h1>auth header</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
