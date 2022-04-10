import { routeConstants } from "../../../../../shared/constants";
import { setRoute } from "../../../../../shared/helpers/routesHelper";
import { Route } from "../../../../../shared/constants/routes";
import Users from ".";

const USERS: Route | undefined =
  routeConstants.DASHBOARD.subroutes &&
  routeConstants.DASHBOARD.subroutes["USERS"];

export default setRoute({
  name: USERS?.name as string,
  path: USERS?.route as string,
  Component: Users,
});
