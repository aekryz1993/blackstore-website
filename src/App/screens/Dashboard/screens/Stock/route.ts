import { routeConstants } from "../../../../../shared/constants";
import { setRoute } from "../../../../../shared/helpers/routesHelper";
import { Route } from "../../../../../shared/constants/routes";
import Stock from ".";

const STOCK: Route | undefined =
  routeConstants.DASHBOARD.subroutes &&
  routeConstants.DASHBOARD.subroutes["STOCK"];

export default setRoute({
  name: STOCK?.name as string,
  path: STOCK?.route as string,
  Component: Stock,
});
