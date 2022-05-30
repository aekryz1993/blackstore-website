import { routeConstants } from "../../../../../../../shared/constants";
import { setRoute } from "../../../../../../../shared/helpers/routesHelper";
import Category from ".";
import { Route } from "../../../../../../../shared/constants/routes";

const dashboardSubroutes = routeConstants.DASHBOARD.subroutes;
const productSubroutes =
  dashboardSubroutes &&
  dashboardSubroutes["PRODUCTS"] &&
  dashboardSubroutes["PRODUCTS"].subroutes;

const CATEGORY: Route | undefined =
  productSubroutes && productSubroutes["CATEGORY"];

export default setRoute({
  name: CATEGORY?.name as string,
  path: CATEGORY?.route as string,
  Component: Category,
});
