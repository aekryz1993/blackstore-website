import { routeConstants } from "../../../../../../../shared/constants";
import { setRoute } from "../../../../../../../shared/helpers/routesHelper";
import Users from ".";
import { Route } from "../../../../../../../shared/constants/routes";

const dashboardSubroutes = routeConstants.DASHBOARD.subroutes;
const usersSubroutes =
  dashboardSubroutes &&
  dashboardSubroutes["USERS"] &&
  dashboardSubroutes["USERS"].subroutes;

const USERS: Route | undefined = usersSubroutes && usersSubroutes["USERS"];

export default setRoute({
  name: USERS?.name as string,
  path: USERS?.route as string,
  Component: Users,
});
