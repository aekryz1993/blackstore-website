import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  isOpen?: boolean;
}

const Helper: React.FC<Props> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export const Container = styled(Helper)``;

export const SecondaryContainer = styled(Helper)`
  background-color: ${(props) => props.theme.colors.primary.darkGreen};
`;

export const ScreenContainer = styled(Helper)`
  width: 100%;
  height: 100vh;
`;
