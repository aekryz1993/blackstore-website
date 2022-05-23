import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAdd } from "react-icons/md";

interface Commonypes {
  className?: string;
}

interface Props extends Commonypes {
  size?: number;
  color?: string;
  radius?: string;
  onClick?: any;
}
interface AddBtnTypes extends Commonypes {
  color?: string;
  size?: number;
  onClick?: () => void;
}

const Helper: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = (props) => (
  <button {...props} className={props.className}>
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

export const CancelButton = styled(Helper)`
  width: 100%;
  height: 3em;
  border-radius: 0.5em;
  background-color: ${(props) => props.theme.colors.primary.gray};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary.light};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.primary.darkGreen};
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

const AddBtnHelper = (props: AddBtnTypes) => (
  <MdAdd {...props} color={props.color} size={props.size} />
);

export const AddBtn = styled(AddBtnHelper)`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  user-select: none;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.2em;
  box-shadow: 0px 0px 5px 2px ${(props) => props.theme.colors.primary.darkGreen};
  background-color: ${(props) => props.theme.colors.primary.green};
`;
