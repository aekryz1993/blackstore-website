import { Container } from "../../../../styles/layout/Container";
import { useNavbar } from "../../../../shared/providers/NavbarContext";
import { SideBar } from "../style";
import Profile from "./Profile";
import NavItems from "./NavItems";

const NavBar = () => {
  const { isOpened } = useNavbar();

  return (
    <SideBar className="flex flex-col gap-12" isOpened={isOpened}>
      <Profile />
      <NavItems />
      <Container className="flex flex-col justify-center align-center w-full flex-grow-3"></Container>
    </SideBar>
  );
};

export default NavBar;
