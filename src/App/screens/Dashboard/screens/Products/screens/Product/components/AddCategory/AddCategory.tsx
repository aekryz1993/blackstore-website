import { FC, Dispatch, SetStateAction } from "react";
import { useCategories } from "../../../../../../../../../shared/providers/CategoriesProvider";
import Modal from "../../../../../../../../../shared/modules/Modal";
import useAddCategory from "./useAddCategory";
import { resetInputs } from "../../../../../../../../../shared/helpers/util";
import Form from "./AddCategoryForm";

const AddCategory: FC<{
  setisopen: Dispatch<SetStateAction<boolean>>;
  isopen: boolean;
  serviceID: string | undefined;
}> = ({ setisopen, isopen, serviceID }) => {
  const {
    categoriesState,
    addCategoryRequest,
    addCategorySuccessed,
    addCategoryFailed,
    addCategoryEnded,
  } = useCategories();

  const { onSubmit, refs, savedAddCategoryEnded } = useAddCategory({
    addCategoryRequest,
    addCategorySuccessed,
    addCategoryFailed,
    addCategoryEnded,
    serviceID,
  });

  const handleCancel = () => {
    resetInputs(refs);
    savedAddCategoryEnded();
    setisopen(false);
  };

  return (
    <Modal isopen={isopen}>
      <Form
        onSubmit={onSubmit}
        status={categoriesState.status}
        refs={refs}
        endAction={savedAddCategoryEnded}
        handleCancel={handleCancel}
      />
    </Modal>
  );
};

export default AddCategory;
