import styled, { css, DefaultTheme, ThemeProps } from "styled-components";
import {
  Container,
  SecondaryContainer,
} from "../../../styles/layout/Container";

interface Props {
  isOpened?: boolean;
}

const sidebarClasses = () => css`
  transition: left 0.8s ease-in-out;
  left: ${(props: ThemeProps<DefaultTheme> & Props) =>
    props.isOpened ? 0 : "-80%"};
  @media (min-width: 400px) {
    width: 60%;
    left: -60%;
    left: ${(props: ThemeProps<DefaultTheme> & Props) =>
      props.isOpened ? 0 : "-60%"};
  }
  @media (min-width: 500px) {
    width: 50%;
    left: -50%;
    left: ${(props: ThemeProps<DefaultTheme> & Props) =>
      props.isOpened ? 0 : "-50%"};
  }
  @media (min-width: 750px) {
    width: 30%;
    left: -30%;
    left: ${(props: ThemeProps<DefaultTheme> & Props) =>
      props.isOpened ? 0 : "-30%"};
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
  position: absolute;
  width: 80%;
  left: -80%;
  height: 100%;
  ${sidebarClasses}
`;

const navbarClasses = () => css`
  transition: left 0.8s ease-in-out;
  left: ${(props: ThemeProps<DefaultTheme> & Props) =>
    props.isOpened ? "80%" : 0};
  @media (min-width: 400px) {
    left: ${(props: ThemeProps<DefaultTheme> & Props) =>
      props.isOpened ? "60%" : 0};
  }
  @media (min-width: 500px) {
    left: ${(props: ThemeProps<DefaultTheme> & Props) =>
      props.isOpened ? "50%" : 0};
  }
  @media (min-width: 750px) {
    left: ${(props: ThemeProps<DefaultTheme> & Props) =>
      props.isOpened ? "30%" : 0};
  }
  @media (min-width: 1024px) {
    transition: left 0s;
    left: 15%;
  }
`;

export const Main = styled(Container)`
  position: relative;
  width: 100%;
  ${navbarClasses}
`;
