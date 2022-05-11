import { useNavbar } from "../../../../shared/providers/NavbarContext";
import { SideBar } from "../style";
import Profile from "./Profile";
import NavItems from "./NavItems";
import Logout from "./Logout";

const NavBar = () => {
  const { isOpened } = useNavbar();

  return (
    <SideBar
      className="flex flex-col gap-12 m-0"
      isopened={isOpened ? "true" : undefined}
    >
      <Profile />
      <NavItems />
      <Logout />
    </SideBar>
  );
};

export default NavBar;
