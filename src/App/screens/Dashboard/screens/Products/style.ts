import styled from "styled-components";
import { Container } from "../../../../../styles/layout/Container";
import { HeaderText } from "../../../../../styles/components/HeaderText";

export const BarContainer = styled(Container)`
  background-color: ${(props) => props.theme.colors.primary.green};
`;

export const BarTitle = styled(HeaderText)`
  color: ${(props) => props.theme.colors.primary.darkGreen};
`;

export const ProductItem = styled(Container)<{
  img: string | null | undefined;
  height?: string;
  onClick?: (v?: string) => void;
}>`
  cursor: pointer;
  background-image: ${(props) => `url(${props.img})`};
  background-size: 100% ${(props) => props.height};
`;
