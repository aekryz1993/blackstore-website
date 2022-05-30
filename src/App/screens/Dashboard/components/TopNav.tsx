import { useTheme } from "styled-components";
import { HamburgerBtn } from "../../../../styles/components/Button";
import {
  SecondaryContainer,
  Container,
} from "../../../../styles/layout/Container";
import { useNavbar } from "../../../../shared/providers/NavbarContext";

const TopNav = () => {
  const theme = useTheme();
  const { isOpened, setIsOpened } = useNavbar();

  return (
    <SecondaryContainer className="flex fixed h-16 w-full above-zIndex">
      <Container className="flex-grow float-left center-v ml-4 lg_hidden">
        <HamburgerBtn
          className="p-1"
          size={37}
          radius="50%"
          color={theme.colors.primary.dark}
          onClick={() => setIsOpened(!isOpened)}
        />
      </Container>
      <Container className="flex-grow"></Container>
      <Container className="flex-grow"></Container>
    </SecondaryContainer>
  );
};

export default TopNav;
