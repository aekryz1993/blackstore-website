import { removeStar } from "../../../../shared/helpers/util";
import { useNavbar } from "../../../../shared/providers/NavbarContext";
import { Sidebar, SidebarItem } from "../../../../styles/components/Sidebar";
import AppRoute from "../route";

const NavItems = () => {
  const { isOpened, setIsOpened } = useNavbar();
  return (
    <Sidebar className="flex flex-col justify-center align-center w-full flex-grow-5">
      <nav className="flex flex-col">
        {AppRoute.routes?.map((route) => (
          <SidebarItem
            onClick={() => setIsOpened(() => !isOpened)}
            key={route.name}
            to={removeStar(route.path)}
          >
            {route.name}
          </SidebarItem>
        ))}
      </nav>
    </Sidebar>
  );
};

export default NavItems;
