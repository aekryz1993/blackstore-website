import React from "react";
import { Outlet } from "react-router-dom";

export const Screen: React.FC = ({ children }) => (
  <div>
    {children}
    <Outlet />
  </div>
);

export const RouteWrapper = ({ render }: { render: () => JSX.Element }) =>
  render();
