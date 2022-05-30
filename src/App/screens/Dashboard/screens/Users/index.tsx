import { Route, Routes } from "react-router-dom";
import { RouteType } from "../../../../../shared/constants/types";

const UsersScreen: React.FC<{ routes?: RouteType[] | undefined }> = ({
  routes,
}) => (
  <Routes>
    {routes?.map((route) => (
      <Route key={route.name} path={route.path} element={<route.Component />} />
    ))}
  </Routes>
);

export default UsersScreen;
