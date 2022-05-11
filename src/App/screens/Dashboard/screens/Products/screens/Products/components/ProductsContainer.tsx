import { useEffect } from "react";
import { useProducts } from "../../../../../../../../shared/providers/ProductsProvider";
import useLocalStorage from "../../../../../../../../shared/hooks/useLocalStorage";
import { useCallbackRef } from "../../../../../../../../shared/helpers/util";
import { fetchProductsFlow } from "../../../../../../../../shared/services/products";
import Products from "./Products";

const ProductsContainer = () => {
  const {
    productsState,
    fetchProductsRequest,
    fetchProductsSuccessed,
    fetchProductsFailed,
    fetchProductsEnded,
  } = useProducts();
  const [token] = useLocalStorage("tokenId");

  const savedProductsRequest = useCallbackRef(fetchProductsRequest);
  const savedFProductsSuccessed = useCallbackRef(fetchProductsSuccessed);
  const savedFProductsFailed = useCallbackRef(fetchProductsFailed);
  const savedFProductsEnded = useCallbackRef(fetchProductsEnded);

  useEffect(() => {
    async function fetch() {
      await fetchProductsFlow(
        {
          fetchProductsRequest: savedProductsRequest.current,
          fetchProductsSuccessed: savedFProductsSuccessed.current,
          fetchProductsFailed: savedFProductsFailed.current,
        },
        token as string
      );
    }
    if (token) fetch();
  }, [
    savedProductsRequest,
    savedFProductsSuccessed,
    savedFProductsFailed,
    token,
  ]);

  useEffect(() => {
    const cleanupLogin = savedFProductsEnded.current;
    return () => {
      cleanupLogin();
    };
  }, [savedFProductsEnded]);

  return (
    <Products products={productsState.products} status={productsState.status} />
  );
};

export default ProductsContainer;
