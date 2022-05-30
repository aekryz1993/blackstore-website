import Loading from "../../../../../../../../App/components/Loading";
import { Status } from "../../../../../../../../Enums";
import { memo, useState } from "react";
import Carousel from "../../../../../../../../shared/modules/Carousel";
import { Container } from "../../../../../../../../styles/layout/Container";
import { ProductItem } from "../../../style";
import { ProductsState } from "../../../types";
import Bar from "./Bar";
import getUrl from "../../../../../../../../shared/constants/apiUrls";
import { useLocation, useNavigate } from "react-router-dom";
import { AddBtn } from "../../../../../../../../styles/components/Button";
import { useTheme } from "styled-components";
import AddProduct from "./AddProduct";

const Products = memo(({ products, status }: Omit<ProductsState, "error">) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isopen, setisopen] = useState(false);
  const theme = useTheme();

  return (
    <Container className="flex flex-col items-center gap-8 w-4xl mt-12">
      <Bar />
      {status === Status.LOADING ? (
        <Loading />
      ) : (
        <Carousel cls="w-full sm__w-5xl md__w-3xl lg__w-2xl xl__w-xl p-2">
          {products &&
            products.map((product) => (
              <ProductItem
                className="h-48"
                height="12rem"
                key={product.id}
                img={getUrl(product.Image?.url)}
                onClick={() =>
                  navigate(`/product/${product.id}`, {
                    state: { from: location },
                  })
                }
              />
            ))}
        </Carousel>
      )}
      <AddBtn
        size={55}
        color={theme.colors.primary.light}
        onClick={() => setisopen(true)}
      />
      <AddProduct setisopen={setisopen} isopen={isopen} />
    </Container>
  );
});

export default Products;
