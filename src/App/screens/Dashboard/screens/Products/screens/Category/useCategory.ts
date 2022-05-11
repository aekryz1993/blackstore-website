import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { findItemById } from "../../../../../../../shared/helpers/util";
import { ProductCategoriesType } from "../../../../../../../shared/constants/types";
import { useCategories } from "../../../../../../../shared/providers/CategoriesProvider";

const useCategory = () => {
  const params = useParams();
  const location = useLocation();
  const { categoriesState } = useCategories();

  const category: ProductCategoriesType | undefined = useMemo(() => {
    return findItemById<ProductCategoriesType>(
      categoriesState.categories,
      params.id
    );
  }, [params.id, categoriesState.categories]);

  return { category, params, location };
};

export default useCategory;
