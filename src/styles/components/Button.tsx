import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  className?: string;
  size?: number;
  color?: string;
  radius?: string;
  onClick?: any;
}

const Helper: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = (props) => (
  <button {...props} className={props.className} type={props.type}>
    {props.children}
  </button>
);

export const Button = styled(Helper)`
  width: 100%;
  height: 3em;
  border-radius: 0.5em;
  background-color: ${(props) => props.theme.colors.primary.green};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary.lightGreen};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.primary.green};
  }
`;

const IconHelper: React.FC<Props> = (props) => (
  <GiHamburgerMenu
    {...props}
    className={props.className}
    size={props.size}
    color={props.color}
  />
);

export const HamburgerBtn = styled(IconHelper)`
  &:hover {
    background-color: ${(props) => props.theme.colors.primary.gray};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.primary.light};
  }
  border-radius: ${(props) => props.radius};
`;
