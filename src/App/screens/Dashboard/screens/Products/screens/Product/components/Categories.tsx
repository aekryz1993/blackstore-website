import { FC } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import { ProductCategoriesType } from "../../../../../../../../shared/constants/types";
import { Container } from "../../../../../../../../styles/layout/Container";
import { useCategories } from "../../../../../../../../shared/providers/CategoriesProvider";
import {
  TextButton,
  SubText,
} from "../../../../../../../../styles/components/Text";
import { CategoryItem } from "../style";
import { useCallbackRef } from "../../../../../../../../shared/helpers/util";
import { useLocation, useNavigate } from "react-router-dom";

const Categories: FC<{ categories: ProductCategoriesType[] | undefined }> = ({
  categories,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { categoriesState, fetchCategories } = useCategories();

  const savedFetchCategories = useCallbackRef(fetchCategories);

  useDeepCompareEffect(() => {
    savedFetchCategories.current({ categories });
  }, [savedFetchCategories, categories]);

  return (
    <Container className="w-full flex flex-col justify-center items-center gap-4 pb-1">
      {categoriesState.categories?.map((category) => (
        <CategoryItem
          className="flex flex-col justify-center items-center py-4 w-5xl gap-1"
          key={category.id}
          onClick={() =>
            navigate(`/category/${category.id}`, {
              state: { from: location },
            })
          }
        >
          <TextButton>{category.label}</TextButton>
          <Container className="flex justify-evenly w-5xl">
            <SubText>{`$${category.Price.dollar}`}</SubText>
            <SubText>{`${category.Price.dinnar} dzd`}</SubText>
            <SubText>{`€${category.Price.euro}`}</SubText>
          </Container>
        </CategoryItem>
      ))}
    </Container>
  );
};

export default Categories;
