import { routeConstants } from "../../../shared/constants";
import { setRoute } from "../../../shared/helpers/routesHelper";
import Dashboard from ".";
import productsRoute from "./screens/Products/route";
import usersRoute from "./screens/Users/route";
import messagesRoute from "./screens/Messages/route";
import stockRoute from "./screens/Stock/route";

export default setRoute({
  name: routeConstants.DASHBOARD.name,
  path: routeConstants.DASHBOARD.route,
  Component: Dashboard,
  routes: [productsRoute, usersRoute, messagesRoute, stockRoute],
});
