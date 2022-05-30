import styled from "styled-components";
import { Container } from "../../../../../../../../styles/layout/Container";

export const ImageInputContainer = styled(Container)<{
  image?: string | null | undefined;
}>`
  background-image: ${(props) => `url(${props.image})`};
`;
