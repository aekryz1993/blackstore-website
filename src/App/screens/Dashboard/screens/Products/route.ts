import { routeConstants } from "../../../../../shared/constants";
import { setRoute } from "../../../../../shared/helpers/routesHelper";
import Products from ".";
import { Route } from "../../../../../shared/constants/routes";

const PRODUCTS: Route | undefined =
  routeConstants.DASHBOARD.subroutes &&
  routeConstants.DASHBOARD.subroutes["PRODUCTS"];

export default setRoute({
  name: PRODUCTS?.name as string,
  path: PRODUCTS?.route as string,
  Component: Products,
});
