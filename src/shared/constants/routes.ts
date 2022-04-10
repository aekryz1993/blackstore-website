export interface Route {
  name: string;
  route: string;
  subroutes?: Routes;
}

interface Routes {
  [key: string]: Readonly<Route>;
}

const dashboardSubroutes: Readonly<Routes> = Object.freeze({
  PRODUCTS: {
    name: "Products",
    route: "/",
  },
  USERS: {
    name: "Users",
    route: "/users",
  },
  MESSAGES: {
    name: "Messages",
    route: "/messages",
  },
  STOCK: {
    name: "Stock",
    route: "/stock",
  },
});

const route: Readonly<Routes> = Object.freeze({
  LOGIN: {
    name: "Login",
    route: "/login",
  },
  DASHBOARD: {
    name: "Dashboard",
    route: "/",
    subroutes: dashboardSubroutes,
  },
});

export default route;
