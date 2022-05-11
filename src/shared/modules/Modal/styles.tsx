import { Container } from "../../../styles/layout/Container";
import styled from "styled-components";

export const ModalContainer = styled(Container)`
  box-shadow: 1px 1px 7px ${(props) => props.theme.colors.primary.green},
    -1px -1px 7px ${(props) => props.theme.colors.primary.green};
  border-radius: 0.1rem;
  background-color: ${(props) => props.theme.colors.primary.dark};
  transition: top 300ms ease-in;
  padding-bottom: 1.5rem;
`;
