import styled, { css, DefaultTheme, ThemeProps } from "styled-components";
import {
  Container,
  SecondaryContainer,
} from "../../../styles/layout/Container";
import { RiLogoutBoxLine } from "react-icons/ri";
import { TextButton } from "../../../styles/components/Text";

interface Props {
  isopened?: string | undefined;
}

interface ILOProps {
  className?: string;
  color?: string;
  size?: number;
  onClick?: any;
}

const sidebarClasses = () => css`
  transition: left 0.8s ease-in-out;
  left: ${(props: ThemeProps<DefaultTheme> & Props) =>
    props.isopened ? 0 : "-80%"};
  @media (min-width: 400px) {
    width: 60%;
    left: -60%;
    left: ${(props: ThemeProps<DefaultTheme> & Props) =>
      props.isopened ? 0 : "-60%"};
  }
  @media (min-width: 500px) {
    width: 50%;
    left: -50%;
    left: ${(props: ThemeProps<DefaultTheme> & Props) =>
      props.isopened ? 0 : "-50%"};
  }
  @media (min-width: 750px) {
    width: 30%;
    left: -30%;
    left: ${(props: ThemeProps<DefaultTheme> & Props) =>
      props.isopened ? 0 : "-30%"};
  }
  @media (min-width: 1024px) {
    transition: left 0s;
    width: 15%;
    left: 0;
  }
`;

export const SideBar = styled(SecondaryContainer)`
  box-shadow: 0 0 3px ${(props) => props.theme.colors.primary.dark};
  z-index: 1;
  position: fixed;
  width: 80%;
  left: -80%;
  height: 100%;
  ${sidebarClasses}
`;

const navbarClasses = () => css`
  transition: left 0.8s ease-in-out;
  width: 100%;
  left: ${(props: ThemeProps<DefaultTheme> & Props) =>
    props.isopened ? "80%" : 0};
  @media (min-width: 400px) {
    left: ${(props: ThemeProps<DefaultTheme> & Props) =>
      props.isopened ? "60%" : 0};
  }
  @media (min-width: 500px) {
    left: ${(props: ThemeProps<DefaultTheme> & Props) =>
      props.isopened ? "50%" : 0};
  }
  @media (min-width: 750px) {
    left: ${(props: ThemeProps<DefaultTheme> & Props) =>
      props.isopened ? "30%" : 0};
  }
  @media (min-width: 1024px) {
    transition: left 0s;
    left: 15%;
    width: 85%;
  }
`;

export const Main = styled(Container)`
  position: relative;
  ${navbarClasses}
`;

const LogoutHelper: React.FC<ILOProps> = (props) => (
  <Container
    {...props}
    className={`${props.className} flex gap-4 justify-center items-center py-4`}
  >
    <RiLogoutBoxLine
      {...props}
      className={props.className}
      size={props.size}
      color={props.color}
    />
    <TextButton>Logout</TextButton>
  </Container>
);

export const ISLogout = styled(LogoutHelper)`
  cursor: pointer;
  &:active {
    background-color: ${(props) => props.theme.colors.primary.dark};
  }
`;
