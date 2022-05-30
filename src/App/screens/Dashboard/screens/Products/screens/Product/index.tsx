import { ProductItem } from "../../style";
import getUrl from "../../../../../../../shared/constants/apiUrls";
import { HeaderText } from "../../../../../../../styles/components/HeaderText";
import useProduct from "./useProduct";
import Categories from "./components/Categories";
import { ProductScreenContainer } from "./style";
import { useTheme } from "styled-components";
import { useState } from "react";
import AddCategory from "./components/AddCategory/AddCategory";
import {
  AddBtnGrp,
  GetBtnGrp,
} from "../../../../../../../styles/components/Button";
import {
  GroupBtns,
  ItemContainer,
} from "../../../../../../../shared/modules/PopupGrpBtns";
import { Container } from "../../../../../../../styles/layout/Container";
import GetCodes from "./components/GetCodes";
import { OrderProvider } from "./components/GetCodes/OrderProvider";

const ProductScreen = () => {
  const { product } = useProduct();
  const theme = useTheme();
  const [isaddcategoryopen, setisaddcategoryopen] = useState(false);
  const [isgetcodesopen, setisgetcodesopen] = useState(false);

  return (
    <ProductScreenContainer className="flex flex-col justify-center items-center gap-8">
      <HeaderText>{product?.label}</HeaderText>
      <ProductItem
        className="w-3xl h-32"
        height="8rem"
        img={getUrl(product?.Image?.url)}
      />
      <Categories categories={product?.ProductCategories} />
      <GroupBtns titles={["Get Codes", "Add Category"]}>
        <Container className="flex flex-col justify-center items-center gap-2">
          <ItemContainer>
            <GetBtnGrp
              size={35}
              color={theme.colors.primary.light}
              onClick={() => setisgetcodesopen(true)}
            />
          </ItemContainer>
          <ItemContainer>
            <AddBtnGrp
              size={35}
              color={theme.colors.primary.light}
              onClick={() => setisaddcategoryopen(true)}
            />
          </ItemContainer>
        </Container>
      </GroupBtns>
      <OrderProvider>
        <GetCodes
          isopen={isgetcodesopen}
          setisopen={setisgetcodesopen}
          serviceName={product?.label}
        />
      </OrderProvider>
      <AddCategory
        isopen={isaddcategoryopen}
        setisopen={setisaddcategoryopen}
        serviceID={product?.id}
      />
    </ProductScreenContainer>
  );
};

export default ProductScreen;
