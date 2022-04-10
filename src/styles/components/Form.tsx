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

const Helper: React.FC<Props> = (props) => (
  <form
    {...props}
    className={`${props.className} flex flex-col justify-between gap-6 `}
  >
    {props.children}
  </form>
);

export const Form = styled(Helper)`
  width: ${(props) => props.width};
`;
