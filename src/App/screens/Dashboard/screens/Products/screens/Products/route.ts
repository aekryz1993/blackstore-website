import { routeConstants } from "../../../../../../../shared/constants";
import { setRoute } from "../../../../../../../shared/helpers/routesHelper";
import Products from ".";
import { Route } from "../../../../../../../shared/constants/routes";

const dashboardSubroutes = routeConstants.DASHBOARD.subroutes;
const productSubroutes =
  dashboardSubroutes &&
  dashboardSubroutes["PRODUCTS"] &&
  dashboardSubroutes["PRODUCTS"].subroutes;

const PRODUCTS: Route | undefined =
  productSubroutes && productSubroutes["PRODUCTS"];

export default setRoute({
  name: PRODUCTS?.name as string,
  path: PRODUCTS?.route as string,
  Component: Products,
});
