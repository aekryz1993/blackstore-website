import { HeaderText } from "../../../../../../../styles/components/HeaderText";
import { Container } from "../../../../../../../styles/layout/Container";
import useCategory from "./useCategory";
import EditCategory from "./components/EditCategory";
import AddCodes from "./components/AddCodes";

const CategoryScreen = () => {
  const { category } = useCategory();

  const categoryValues = {
    label: category?.label,
    dollar: category?.Price.dollar,
    euro: category?.Price.euro,
    dinnar: category?.Price.dinnar,
  };

  return (
    <Container className="flex flex-col justify-center items-center gap-16 w-full">
      <HeaderText>{category?.label}</HeaderText>
      <Container className="flex flex-col w-full gap-4">
        <EditCategory categoryValues={categoryValues} id={category?.id} />
        <AddCodes category={category} />
      </Container>
    </Container>
  );
};

export default CategoryScreen;
