import { FC, forwardRef, Fragment, LegacyRef, Ref } from "react";
import styled from "styled-components";
import { Container } from "../layout/Container";

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

interface SimpleInputProps {
  className?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  name: string;
  value: string | undefined;
  dataTestid?: string;
}

const Helper: FC<Props> = forwardRef((props, ref) => (
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

const SimpleInputHelper = forwardRef(
  (props: SimpleInputProps, ref: LegacyRef<HTMLInputElement>) => (
    <input
      className={props.className}
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      defaultValue={props.value}
      ref={ref}
      data-testid={props.dataTestid}
    />
  )
);

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

export const SimpleInput = styled(SimpleInputHelper)`
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

const InputBtnHelper: React.ForwardRefExoticComponent<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
    React.RefAttributes<HTMLInputElement>
> = forwardRef((props, ref: LegacyRef<HTMLInputElement>) => (
  <input {...props} placeholder="_" ref={ref} />
));

export const InputButton = styled(InputBtnHelper)<{ content: string }>`
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

export const InputCheckbox = forwardRef(
  (props: SimpleInputProps, ref: Ref<HTMLInputElement>) => (
    <Container>
      <InputCheckboxStyle
        className={props.className}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        id={props.name}
        value={props.value}
        ref={ref}
        onChange={props.onChange}
        data-testid={props.dataTestid}
      />
      <Label className="label" htmlFor={props.name}>
        {props.placeholder}
      </Label>
    </Container>
  )
);
