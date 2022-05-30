import { FC } from "react";
import { IconBaseProps } from "react-icons";
import { BsCheckCircle } from "react-icons/bs";
import styled, { useTheme } from "styled-components";
import { Container } from "../layout/Container";
import { TextButton } from "./Text";

interface MessageProps {
  className?: string;
  bordercolor: string | undefined;
}

interface ResultMessageProps {
  message: string;
}

const MessageContainer = styled(Container)<{ bordercolor: string | undefined }>`
  border: 1px solid ${(props) => props.bordercolor};
  border-radius: 0.2rem;
`;

const Message: FC<MessageProps> = (props) => {
  return (
    <MessageContainer
      {...props}
      className={`${props.className} flex items-center py-4`}
      bordercolor={props.bordercolor}
    >
      {props.children}
    </MessageContainer>
  );
};

export const SuccessMessage = (props: ResultMessageProps) => {
  const theme = useTheme();

  return (
    <Message {...props} bordercolor={theme.colors.secondary.success}>
      <IconRender color={theme.colors.secondary.success} />
      <MessageRender message={props.message} />
    </Message>
  );
};

export const ErrorMessage = (props: ResultMessageProps) => {
  const theme = useTheme();

  return (
    <Message {...props} bordercolor={theme.colors.secondary.danger}>
      <IconRender color={theme.colors.secondary.danger} />
      <MessageRender message={props.message} />
    </Message>
  );
};

function IconRender(props: IconBaseProps) {
  return <BsCheckCircle {...props} color={props.color} />;
}

const MessageRender: FC<{ message: string }> = (props) => {
  return <TextButton {...props}>{props.message}</TextButton>;
};
