import { RouteType } from "@shared/constants/types";

export const setRoute: ({
  name,
  path,
  Component,
  routes,
}: RouteType) => Readonly<RouteType> = ({ name, path, Component, routes }) =>
  Object.freeze({
    name,
    path,
    Component,
    routes,
  });
