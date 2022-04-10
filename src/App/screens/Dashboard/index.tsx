import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../../components/RequireAuth";
import { ScreenContainer } from "../../../styles/layout/Container";
import TopNav from "./components/TopNav";
import { Main } from "./style";
import NavBar from "./components/Navbar";
import { useNavbar } from "../../../shared/providers/NavbarContext";
import { RouteType } from "../../../shared/constants/types";

const Dashboard: FC<{ routes?: RouteType[] | undefined }> = ({ routes }) => {
  const { isOpened } = useNavbar();
  return (
    <RequireAuth>
      <ScreenContainer className="flex hidden-overflow">
        <NavBar />
        <Main className="" isOpened={isOpened}>
          <TopNav />
          <main className="mt-16">
            <Routes>
              {routes?.map((route) => (
                <Route
                  key={route.name}
                  path={route.path}
                  element={<route.Component />}
                />
              ))}
            </Routes>
          </main>
        </Main>
      </ScreenContainer>
    </RequireAuth>
  );
};

export default Dashboard;
