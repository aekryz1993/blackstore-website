import { FC, forwardRef, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const Helper: FC<Props> = (props) => (
  <div {...props} className={props.className}>
    {props.children}
  </div>
);

export const ContainerWithRefHelper = forwardRef<
  HTMLDivElement,
  Props & { children?: ReactNode }
>((props, ref) => (
  <div {...props} className={props.className} ref={ref}>
    {props.children}
  </div>
));

export const Container = styled(Helper)``;

export const ContainerWithRef = styled(ContainerWithRefHelper)``;

export const SecondaryContainer = styled(Helper)`
  background-color: ${(props) => props.theme.colors.primary.darkGreen};
`;

export const ScreenContainer = styled(Helper)`
  position: absolute;
  width: 100%;
  min-height: 100%;
`;

export const Paper = styled(Helper)`
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  padding: 25px;
`;

export const Wrapper = styled(Helper)`
  width: 100%;
  overflow: hidden;
  box-shadow: 5px 5px 20px 7px rgba(168, 168, 168, 1);
`;
