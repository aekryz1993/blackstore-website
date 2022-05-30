import { routeConstants } from "../../../../../shared/constants";
import { setRoute } from "../../../../../shared/helpers/routesHelper";
import Products from ".";
import { Route } from "../../../../../shared/constants/routes";
import productsRoute from "./screens/Products/route";
import productRoute from "./screens/Product/route";
import categoryRoute from "./screens/Category/route";

const PRODUCTS: Route | undefined =
  routeConstants.DASHBOARD.subroutes &&
  routeConstants.DASHBOARD.subroutes["PRODUCTS"];

export default setRoute({
  name: PRODUCTS?.name as string,
  path: PRODUCTS?.route as string,
  Component: Products,
  routes: [productsRoute, productRoute, categoryRoute],
});
