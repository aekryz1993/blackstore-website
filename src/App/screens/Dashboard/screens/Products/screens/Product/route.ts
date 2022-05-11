import { routeConstants } from "../../../../../../../shared/constants";
import { setRoute } from "../../../../../../../shared/helpers/routesHelper";
import Product from ".";
import { Route } from "../../../../../../../shared/constants/routes";

const dashboardSubroutes = routeConstants.DASHBOARD.subroutes;
const productSubroutes =
  dashboardSubroutes &&
  dashboardSubroutes["PRODUCTS"] &&
  dashboardSubroutes["PRODUCTS"].subroutes;

const PRODUCT: Route | undefined =
  productSubroutes && productSubroutes["PRODUCT"];

export default setRoute({
  name: PRODUCT?.name as string,
  path: PRODUCT?.route as string,
  Component: Product,
});
