import { RouteType } from "../../../../..//shared/constants/types";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

const ProductsScreen: FC<{ routes?: RouteType[] | undefined }> = ({
  routes,
}) => (
  <Routes>
    {routes?.map((route) => (
      <Route key={route.name} path={route.path} element={<route.Component />} />
    ))}
  </Routes>
);

export default ProductsScreen;
