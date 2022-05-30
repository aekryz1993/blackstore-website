import { routeConstants } from "../../../shared/constants";
import { setRoute } from "../../../shared/helpers/routesHelper";
import Login from "./";

export default setRoute({
  name: routeConstants.LOGIN.name,
  path: routeConstants.LOGIN.route,
  Component: Login,
});
