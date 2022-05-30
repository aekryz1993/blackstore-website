export interface Route {
  name: string;
  route: string;
  subroutes?: Routes;
}

interface Routes {
  [key: string]: Readonly<Route>;
}

const productsSubroutes: Readonly<Routes> = Object.freeze({
  PRODUCTS: {
    name: "Products",
    route: "/",
  },
  PRODUCT: {
    name: "Product",
    route: "/product/:id",
  },
  CATEGORY: {
    name: "Category",
    route: "/category/:id",
  },
});

const usersSubroutes: Readonly<Routes> = Object.freeze({
  USERS: {
    name: "Users",
    route: "/",
  },
  USER: {
    name: "User",
    route: "/user/:id",
  },
});

const dashboardSubroutes: Readonly<Routes> = Object.freeze({
  PRODUCTS: {
    name: "Products",
    route: "/*",
    subroutes: productsSubroutes,
  },
  USERS: {
    name: "Users",
    route: "/users/*",
    subroutes: usersSubroutes,
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
    route: "/*",
    subroutes: dashboardSubroutes,
  },
});

export default route;
