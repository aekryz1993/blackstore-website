import { ProductItem } from "../../style";
import getUrl from "../../../../../../../shared/constants/apiUrls";
import { HeaderText } from "../../../../../../../styles/components/HeaderText";
import useProduct from "./useProduct";
import Categories from "./components/Categories";
import { ProductScreenContainer } from "./style";
import { useTheme } from "styled-components";
import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { AddBtn } from "../../../../../../../styles/components/Button";

const ProductScreen = () => {
  const { product } = useProduct();
  const theme = useTheme();
  const [isopen, setisopen] = useState(false);

  return (
    <ProductScreenContainer className="flex flex-col justify-center items-center gap-8">
      <HeaderText>{product?.label}</HeaderText>
      <ProductItem
        className="w-3xl h-32"
        height="8rem"
        img={getUrl(product?.Image?.url)}
      />
      <Categories categories={product?.ProductCategories} />
      <AddBtn
        size={55}
        color={theme.colors.primary.light}
        onClick={() => setisopen(true)}
      />
      <AddCategory
        isopen={isopen}
        setisopen={setisopen}
        serviceID={product?.id}
      />
    </ProductScreenContainer>
  );
};

export default ProductScreen;
