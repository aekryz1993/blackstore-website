import { memo, useEffect, useState } from "react";
import { SuccessMessage, ErrorMessage } from "../../styles/components/Message";
import { Status } from "../../Enums";
import { Container } from "../../styles/layout/Container";
import { Dispatch } from "../constants/types";

interface Props {
  success: string;
  error: string;
  endAction?: Dispatch;
  status: Status | undefined;
}

export const Message = memo(({ endAction, success, error, status }: Props) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (status === Status.SUCCESS || status === Status.ERROR) setDisplay(true);
    const timer = setTimeout(() => {
      setDisplay(false);
      endAction?.();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [endAction, status]);

  return (
    <Container className="px-8 pt-16">
      {status === Status.SUCCESS && display ? (
        <SuccessMessage message={success} />
      ) : status === Status.ERROR && display ? (
        <ErrorMessage message={error} />
      ) : (
        <></>
      )}
    </Container>
  );
});
