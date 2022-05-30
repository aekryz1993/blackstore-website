import { Container } from "../../../styles/layout/Container";
import styled from "styled-components";
import { Dir } from "./types";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

interface IconProps {
  float: "left" | "right";
  className?: string;
  onClick?: () => void;
}

export const Wrapper = styled(Container)`
  overflow: hidden;
  border-radius: 0.1em;
  box-shadow: 1px 1px 7px ${(props) => props.theme.colors.primary.green},
    -1px -1px 7px ${(props) => props.theme.colors.primary.green};
`;

export const CarouselContainer = styled(Container)<{
  sliding: string | undefined;
  dir: Dir;
}>`
  display: flex;
  transition: ${(props) => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${(props) => {
    if (!props.sliding) return "translateX(calc(-100%))";
    if (props.dir === Dir.PREV) return "translateX(calc(2 * (-100%)))";
    return "translateX(0%)";
  }};
`;

export const CarouselSlot = styled(Container)<{ order: number }>`
  flex: 1 0 100%;
  flex-basis: 100%;
  order: ${(props) => props.order};
`;

export const SlideButtonContainer = styled(Container)``;

const IconHelper: React.FC<IconProps> = (props) => {
  return props.float === "left" ? (
    <BsArrowLeftCircle {...props} />
  ) : (
    <BsArrowRightCircle {...props} />
  );
};

export const SlideButton = styled(IconHelper).attrs({
  size: 30,
})<{
  float: "left" | "right";
}>`
  cursor: pointer;
  position: absolute;
  right: ${(props) => props.float === "right" && "1em"};
  left: ${(props) => props.float === "left" && "1em"};
  color: ${(props) => props.theme.colors.primary.light};
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 1px 1px 10px 1px #5c5c5c;
`;
