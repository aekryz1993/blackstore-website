import { Children, FC, useReducer } from "react";
import { useSwipeable } from "react-swipeable";
import { getInitialState, getOrder } from "./helpers";
import { ContainerWithRef } from "../../../styles/layout/Container";
import { reducer } from "./reducer";
import { CarouselContainer, CarouselSlot, SlideButton, Wrapper } from "./style";
import { Dir } from "./types";

const Carousel: FC<{ cls?: string }> = ({ children, cls }) => {
  const numItems = Children.count(children);
  const [state, dispatch] = useReducer(reducer, getInitialState(numItems));

  const slide = (dir: Dir) => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: Dir.STOP });
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(Dir.NEXT),
    onSwipedRight: () => slide(Dir.PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <ContainerWithRef {...handlers} className={cls}>
      <Wrapper className="relative">
        <CarouselContainer
          dir={state.dir}
          sliding={state.sliding ? state.sliding.toString() : undefined}
        >
          {Children.map(children, (child, index) => (
            <CarouselSlot order={getOrder(index, state.pos, numItems)}>
              {child}
            </CarouselSlot>
          ))}
        </CarouselContainer>
        <SlideButton float="left" onClick={() => slide(Dir.PREV)} />
        <SlideButton float="right" onClick={() => slide(Dir.NEXT)} />
      </Wrapper>
    </ContainerWithRef>
  );
};

export default Carousel;
