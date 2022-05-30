import { H4 } from "../../../styles/components/Text";
import { useState } from "react";
import { IconBaseProps } from "react-icons";
import { MdMenuOpen } from "react-icons/md";
import styled, { css, useTheme } from "styled-components";
import { Container } from "../../../styles/layout/Container";

interface PropsType {
  isopen: string | undefined;
  onClick?: () => void;
}

const GrpBtnHelper = (props: IconBaseProps) => (
  <MdMenuOpen {...props} color={props.color} size={props.size} />
);

const commonStype = css`
  position: fixed;
  transition: all 300ms linear;
`;

const closedStyle = css`
  right: 1rem;
  bottom: 1rem;
  background-color: transparent;
`;

const openedStyle = css`
  left: 0rem;
  top: 0rem;
  opacity: 0.8;
  background-color: ${(props) => props.theme.colors.primary.dark};
`;

const openedGrpBtns = css`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
`;

export const GrpBtn = styled(GrpBtnHelper)`
  user-select: none;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.2em;
  box-shadow: 0px 0px 5px 2px ${(props) => props.theme.colors.primary.darkGreen};
  background-color: ${(props) => props.theme.colors.primary.green};
`;

const GrpBtnContainer = styled(Container)<PropsType>`
  ${commonStype}
  ${(props) => !props.isopen && closedStyle}
  ${(props) => props.isopen && openedStyle}
`;

const BtnsContainer = styled(Container)<PropsType>`
  ${(props) => props.isopen && openedGrpBtns}
`;

export const ItemContainer = styled(Container)`
  height: 3rem;
  display: flex;
  align-items: center;
`;

export const GroupBtns: React.FC<{ titles: string[] }> = ({
  children,
  titles,
}) => {
  const theme = useTheme();
  const [isopen, setisopen] = useState(false);

  return (
    <GrpBtnContainer
      isopen={isopen ? isopen.toString() : undefined}
      className={`${isopen && "w-full h-full"}`}
      onClick={() => isopen && setisopen(false)}
    >
      <BtnsContainer
        className="flex justify-center items-center gap-4"
        isopen={isopen ? isopen.toString() : undefined}
      >
        {isopen && (
          <Container className="flex flex-col justify-center items-start gap-2">
            {titles.map((title) => (
              <ItemContainer key={title}>
                <H4>{title}</H4>
              </ItemContainer>
            ))}
            <ItemContainer />
          </Container>
        )}
        <Container className="flex flex-col justify-center items-center gap-2">
          {isopen && children}
          <ItemContainer>
            <GrpBtn
              size={45}
              color={theme.colors.primary.light}
              onClick={() => setisopen(!isopen)}
            />
          </ItemContainer>
        </Container>
      </BtnsContainer>
    </GrpBtnContainer>
  );
};
