import { FormEvent } from "react";
import styled from "styled-components";

interface SimpleProps {
  className?: string;
  width?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

const SimpleFormHelper: React.FC<SimpleProps> = (props) => (
  <form {...props}>{props.children}</form>
);

export const SimpleForm = styled(SimpleFormHelper)`
  width: ${(props) => props.width};
`;
