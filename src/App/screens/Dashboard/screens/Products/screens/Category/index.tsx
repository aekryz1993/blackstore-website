import { Container } from "../../../../../../../styles/layout/Container";
import useCategory from "./useCategory";

const CategoryScreen = () => {
  const { category } = useCategory();
  return (
    <Container className="flex flex-col justify-center items-center gap-8">
      <h1>{category?.label}</h1>
    </Container>
  );
};

export default CategoryScreen;
