import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { findItemById } from "../../../../../../../shared/helpers/util";
import { useProducts } from "../../../../../../../shared/providers/ProductsProvider";
import { Product } from "../../../../../../../shared/constants/types";

const useProduct = () => {
  const params = useParams();
  const location = useLocation();
  const { productsState } = useProducts();

  const product: Product | undefined = useMemo(
    () => findItemById<Product>(productsState.products, params.id),
    [params.id, productsState.products]
  );

  return { product, params, location };
};

export default useProduct;
