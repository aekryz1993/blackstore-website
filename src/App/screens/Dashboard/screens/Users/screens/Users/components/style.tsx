import { MdOutlineClose } from "react-icons/md";
import styled from "styled-components";

interface CloseBtnTypes {
  className?: string;
  color?: string;
  size?: number;
  onClick?: () => void;
}

const CloseBtnHelper = (props: CloseBtnTypes) => <MdOutlineClose {...props} />;

export const CloseBtn = styled(CloseBtnHelper)`
  user-select: none;
  cursor: pointer;
`;
