import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  required?: string;
  dataTestid?: string;
  minLength?: { value: number; message: string };
  register: any;
}

const Helper: React.FC<Props> = React.forwardRef((props, ref) => (
  <input
    className={props.className}
    placeholder={props.placeholder}
    {...props.register(props.name, {
      required: props.required,
      minLength: {
        value: props.minLength?.value,
        message: props.minLength?.message,
      },
    })}
    type={props.type}
    data-testid={props.dataTestid}
  />
));

export const Input = styled(Helper)`
  width: 100%;
  height: 3em;
  border: 2px solid ${(props) => props.theme.colors.primary.darkGreen};
  border-radius: 0.5em;
  background-color: ${(props) => props.theme.colors.primary.dark};
  padding-left: 1.5em;
  color: ${(props) => props.theme.colors.primary.light};
  &:focus {
    outline: none !important;
    border-color: ${(props) => props.theme.colors.primary.lightGreen};
  }
`;
