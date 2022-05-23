import styled from "styled-components";
import { Container } from "../../../../../../../styles/layout/Container";

interface Commonypes {
  className?: string;
}

interface CategoryItemTypes extends Commonypes {
  key?: string;
  onClick?: () => void;
  children?: React.ReactNode;
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
