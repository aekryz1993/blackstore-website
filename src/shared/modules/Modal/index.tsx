import { ModalContainer } from "./styles";
import { FC } from "react";

const Modal: FC<{ isopen: boolean }> = ({ children, isopen }) => {
  return (
    <ModalContainer
      className={`above-zIndex w-4xl sm__w-4xl md__w-3xl lg__w-2xl xl__w-xl ${
        isopen ? "top-visible" : "top-hide"
      }`}
    >
      {children}
    </ModalContainer>
  );
};

export default Modal;
