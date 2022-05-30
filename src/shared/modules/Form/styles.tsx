import { Container } from "../../../styles/layout/Container";
import styled from "styled-components";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

export const Header = styled(Container)`
  background-color: ${(props) => props.theme.colors.primary.darkGreen};
`;

const BtnHelper: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => (
  <button {...props} className={`${props.className} w-16`}>
    {props.children}
  </button>
);

export const Button = styled(BtnHelper)`
  padding: 0.3em;
  background-color: ${(props) => props.theme.colors.primary.darkGreen};
  height: 100%;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary.gray};
  }
`;
