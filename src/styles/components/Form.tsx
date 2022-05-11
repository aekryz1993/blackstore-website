import { FormEvent } from "react";
import { UseFormReset } from "react-hook-form";
import styled from "styled-components";

interface Props {
  className?: string;
  width?: string;
  onSubmit?: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  onReset?: UseFormReset<any>;
}

const FormHelper: React.FC<Props> = (props) => (
  <form
    {...props}
    className={`flex flex-col justify-between gap-6 ${props.className}`}
  >
    {props.children}
  </form>
);

export const Form = styled(FormHelper)`
  width: ${(props) => props.width};
`;

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
