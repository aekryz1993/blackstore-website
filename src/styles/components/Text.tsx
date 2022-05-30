import styled from "styled-components";
import { FaSpinner } from "react-icons/fa";
import { Fragment } from "react";

interface Props {
  className?: string;
  fontSize?: any;
  color?: string;
  text?: string;
  size?: number;
}

const TextHelper: React.FC<Props> = ({ className, children }) => (
  <span className={className}>{children}</span>
);

const H3Helper: React.FC<Props> = ({ className, children }) => (
  <h3 className={className}>{children}</h3>
);

const IconHelper: React.FC<Props> = ({ className, text, size }) => (
  <Fragment>
    <FaSpinner className={`spinner ${className}`} size={size} /> {text}
  </Fragment>
);

export const ErrorText = styled(TextHelper)`
  color: ${(props) => props.theme.colors.secondary.danger};
  margin-left: 0.5em;
`;

export const TextButton = styled(TextHelper)<{ mode?: "dark" | "light" }>`
  color: ${(props) =>
    props.mode === "light"
      ? props.theme.colors.primary.dark
      : props.theme.colors.primary.light};
  font-weight: bold;
`;

export const Head3 = styled(H3Helper)`
  color: ${(props) => props.theme.colors.primary.dark};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  margin: 0;
`;

export const SubText = styled(TextHelper)`
  color: ${(props) => props.theme.colors.primary.gray};
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const H4 = styled.h4`
  color: ${(props) => props.theme.colors.primary.light};
`;

export const LoadingIcon = styled(IconHelper)``;
