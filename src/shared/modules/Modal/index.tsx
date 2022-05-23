import { ModalContainer } from "./styles";
import { FC } from "react";

const Modal: FC<{ isopen: boolean; className?: string }> = ({
  children,
  isopen,
  className,
}) => {
  return (
    <ModalContainer
      className={`above-zIndex w-4xl sm__w-4xl md__w-3xl lg__w-2xl xl__w-xl auto-overflowY ${
        isopen ? "top-visible" : "top-hide"
      } ${className}`}
    >
      {children}
    </ModalContainer>
  );
};

export default Modal;
