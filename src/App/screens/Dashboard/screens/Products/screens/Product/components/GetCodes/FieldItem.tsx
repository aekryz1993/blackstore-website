import { useMemo, memo, useRef } from "react";
import debounce from "lodash.debounce";
import { useTheme } from "styled-components";
import { Container } from "../../../../../../../../../styles/layout/Container";
import {
  AddBtnGrp,
  MinusBtnGrp,
} from "../../../../../../../../../styles/components/Button";
import { Input } from "../../../../../../../../../styles/components/Input";
import { OrderType, useOrder } from "./OrderProvider";
import { findIndexById } from "../../../../../../../../../shared/helpers/util";
import { H4 } from "../../../../../../../../../styles/components/Text";

interface TProps {
  price: number;
  id: string;
  order: OrderType[];
}

const FieldItem = memo(({ price, id, order }: TProps) => {
  const prevQuantity = useRef<number>();
  const {
    decrementQuantity,
    incrementQuantity,
    focusQuantity,
    changeQuantity,
    endChangeQuantity,
  } = useOrder();

  const index = useMemo(() => findIndexById(id, order), [id, order]);

  const theme = useTheme();
  const primariColors = theme.colors.primary;

  // const savedChangeQuantity = useRef(changeQuantity);

  const focusHandler = () => {
    prevQuantity.current = Number(order[index as number].quantity);
    focusQuantity({
      index,
    });
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeQuantity({
      newQuantity: Number(event.target.value),
      index,
    });
  };

  const blurHandler = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    if (event.target.value === "") {
      changeQuantity({
        newQuantity: prevQuantity.current,
        index,
      });
      prevQuantity.current = undefined;
      return;
    }
    endChangeQuantity({
      prevQuantity: prevQuantity.current,
      price,
      index,
    });
    prevQuantity.current = undefined;
  };

  // const debouncedChangeHandler = useMemo(
  //   () =>
  //     debounce((event: React.ChangeEvent<HTMLInputElement>) => {
  //       console.log(Number(event.target.value));
  //       savedChangeQuantity.current({
  //         id,
  //         price,
  //         quantity: Number(event.target.value),
  //       });
  //     }, 300),
  //   [id, price]
  // );

  const decrementHandler = () => {
    decrementQuantity({ price, index });
  };

  const incrementHandler = () => {
    incrementQuantity({ price, index });
  };

  // useEffect(() => {
  //   return () => {
  //     debouncedChangeHandler.cancel();
  //   };
  // }, [debouncedChangeHandler]);

  return (
    <Container className="flex flex-col justify-center items-center gap-4">
      <H4>
        {order && order.length && order[index as number].label} - {price}
      </H4>
      <Container className="flex justify-center items-center gap-2 w-xl">
        <MinusBtnGrp
          size={30}
          color={primariColors.light}
          onClick={decrementHandler}
        />
        <Input
          type="text"
          onFocus={focusHandler}
          onChange={changeHandler}
          onBlur={blurHandler}
          value={order[index as number].quantity}
        />
        <AddBtnGrp
          size={30}
          color={primariColors.light}
          onClick={incrementHandler}
        />
      </Container>
    </Container>
  );
});

export default FieldItem;
