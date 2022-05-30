import { Outlet } from "react-router-dom";
import { useAuth } from "../../shared/providers/AuthProvider";
import { Status } from "../../Enums";
import Loading from "./Loading";

function Layout() {
  let { authState } = useAuth();
  if (authState.status === Status.LOADING) return <Loading />;
  return <Outlet />;
}

export default Layout;
