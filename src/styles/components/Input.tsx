import { forwardRef, LegacyRef, Ref } from "react";
import styled, {
  css,
  DefaultTheme,
  ThemedStyledProps,
} from "styled-components";
import { Container } from "../layout/Container";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  datatestid?: string | undefined;
};

const InputHelper = forwardRef(
  (props: InputProps, ref: LegacyRef<HTMLInputElement>) => (
    <input {...props} ref={ref} data-testid={props.datatestid} />
  )
);

const commonInput = <PropsType,>(
  props: ThemedStyledProps<PropsType, DefaultTheme>
) => css`
  width: 100%;
  height: 3em;
  border: 2px solid ${props.theme.colors.primary.darkGreen};
  border-radius: 0.5em;
  background-color: ${props.theme.colors.primary.dark};
  padding-left: 1.5em;
  color: ${props.theme.colors.primary.light};
  &:focus {
    outline: none !important;
    border-color: ${props.theme.colors.primary.lightGreen};
  }
`;

const InputBtnHelper: React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
> = forwardRef((props, ref: LegacyRef<HTMLInputElement>) => (
  <input {...props} placeholder="_" ref={ref} />
));

const Label = styled.label``;

const InputCheckboxStyle = styled.input`
  & + ${Label} {
    display: block;
    margin: 0.2rem;
    cursor: pointer;
    padding: 0.2rem;
  }

  & {
    display: none;
  }

  & + ${Label}:before {
    content: "\\2714";
    border: 0.1rem solid ${(props) => props.theme.colors.primary.light};
    border-radius: 0.2rem;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    padding-left: 0.2rem;
    padding-bottom: 0.3rem;
    margin-right: 0.2rem;
    vertical-align: bottom;
    color: transparent;
    transition: 0.2s;
  }

  & + ${Label}:active:before {
    transform: scale(0);
  }

  &:checked + ${Label}:before {
    background-color: ${(props) => props.theme.colors.primary.green};
    border-color: ${(props) => props.theme.colors.primary.green};
    color: ${(props) => props.theme.colors.primary.light};
  }

  &:disabled + ${Label}:before {
    transform: scale(1);
    border-color: ${(props) => props.theme.colors.primary.gray};
  }

  &:checked:disabled + ${Label}:before {
    transform: scale(1);
    background-color: ${(props) => props.theme.colors.primary.green};
    border-color: ${(props) => props.theme.colors.primary.green};
  }
`;

export const Input = styled(InputHelper)`
  ${(props) =>
    commonInput<InputProps & React.RefAttributes<HTMLInputElement>>(props)}
`;

export const InputButton = styled(InputBtnHelper)<{ content?: string }>`
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &::before {
    content: ${(props) => props.content};
    display: inline-block;
    background-color: ${(props) => props.theme.colors.primary.green};
    border-radius: 0.5em;
    height: 3em;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    font-weight: 700;
    text-shadow: 1px 1px #fff;
  }
  &:hover::before {
    background-color: ${(props) => props.theme.colors.primary.lightGreen};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.primary.green};
  }
`;

export const InputCheckbox = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => (
    <Container>
      <InputCheckboxStyle
        {...props}
        id={props.name}
        ref={ref}
        data-testid={props.datatestid}
      />
      <Label className="label" htmlFor={props.name}>
        {props.placeholder}
      </Label>
    </Container>
  )
);

export const InputNumber = styled(Input)`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;
