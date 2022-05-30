import { useCallbackRef } from "../../../../../../../../../shared/helpers/util";
import { FormEvent, useEffect, useMemo } from "react";
import useLocalStorage from "../../../../../../../../../shared/hooks/useLocalStorage";
import { CodesContextTypeDef } from "../../../../../../../../../shared/providers/CodesProvider";
import { fetchCodesFlow } from "../../../../../../../../../shared/services/codes";
import { useMemoCategories } from "../../../../../../../../../shared/providers/CategoriesProvider";
import { OrderType, useOrder } from "./OrderProvider";

type CbRefs = Pick<
  CodesContextTypeDef,
  | "fetchCodesRequest"
  | "fetchCodesSuccessed"
  | "fetchCodesFailed"
  | "fetchCodesEnded"
> & { order: OrderType[]; serviceName: string | undefined };

const useFetchCodes = ({
  fetchCodesRequest,
  fetchCodesSuccessed,
  fetchCodesFailed,
  fetchCodesEnded,
  order,
  serviceName,
}: CbRefs) => {
  const [token] = useLocalStorage("tokenId");
  const { initiateOrder } = useOrder();
  const { categories } = useMemoCategories();

  const savedFetchCodesEnded = useCallbackRef(fetchCodesEnded);
  const savedIinitiateOrder = useCallbackRef(initiateOrder);

  const initialOrder = useMemo(
    () =>
      categories.map((category) => ({
        id: category.id,
        label: category.label,
        quantity: 0,
      })),
    [categories]
  );

  useEffect(() => {
    if (initialOrder) savedIinitiateOrder.current({ initialOrder });
  }, [initialOrder, savedIinitiateOrder]);

  const onSubmit: (event: FormEvent<HTMLFormElement>) => void = (event) => {
    event.preventDefault();
    async function getCodes() {
      await fetchCodesFlow({
        context: {
          fetchCodesRequest,
          fetchCodesSuccessed,
          fetchCodesFailed,
        },
        token: token as string,
        serviceName: serviceName as string,
        order,
      });
    }

    if (token && serviceName && order && order.length) getCodes();
  };

  return {
    onSubmit,
    categories,
    token,
    savedFetchCodesEnded: savedFetchCodesEnded.current,
  };
};

export default useFetchCodes;
