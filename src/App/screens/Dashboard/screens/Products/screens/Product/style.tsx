import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { Container } from "../../../../../../../styles/layout/Container";

interface Commonypes {
  className?: string;
}

interface CategoryItemTypes extends Commonypes {
  key?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

interface AddBtnTypes extends Commonypes {
  color?: string;
  size?: number;
  onClick?: () => void;
}

export const ProductScreenContainer = styled(Container)`
  min-height: 100%;
`;

const CategoryItemHelper = (props: CategoryItemTypes) => (
  <Container {...props}>{props.children}</Container>
);

export const CategoryItem = styled(CategoryItemHelper)`
  user-select: none;
  cursor: pointer;
  box-shadow: 1px 1px 2px 1px ${(props) => props.theme.colors.primary.green};
  background-color: ${(props) => props.theme.colors.primary.darkGreen};
`;

const AddBtnHelper = (props: AddBtnTypes) => (
  <MdAdd {...props} color={props.color} size={props.size} />
);

export const AddBtn = styled(AddBtnHelper)`
  position: fixed;
  right: 1em;
  bottom: 1em;
  user-select: none;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.2em;
  box-shadow: 0px 0px 5px 2px ${(props) => props.theme.colors.primary.darkGreen};
  background-color: ${(props) => props.theme.colors.primary.green};
`;
