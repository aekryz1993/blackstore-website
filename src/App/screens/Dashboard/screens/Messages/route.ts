import { routeConstants } from "../../../../../shared/constants";
import { setRoute } from "../../../../../shared/helpers/routesHelper";
import Messages from ".";
import { Route } from "../../../../../shared/constants/routes";

const MESSAGES: Route | undefined =
  routeConstants.DASHBOARD.subroutes &&
  routeConstants.DASHBOARD.subroutes["MESSAGES"];

export default setRoute({
  name: MESSAGES?.name as string,
  path: MESSAGES?.route as string,
  Component: Messages,
});
