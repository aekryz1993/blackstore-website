import { FC, Dispatch, SetStateAction } from "react";
import Form from "../../../../../../../../shared/modules/Form/SimpleFormWithHeader";
import { categoryFields } from "../../Category/components/categoryFields";
import { useCategories } from "../../../../../../../../shared/providers/CategoriesProvider";
import Modal from "../../../../../../../../shared/modules/Modal";
import useAddCategory from "./useAddCategory";
import { resetInputs } from "../../../../../../../../shared/helpers/util";

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
        fields={categoryFields()}
        status={categoriesState.status}
        successMsg="Category has been successfully created"
        errorMsg="The Category is already exist"
        headerTitle="Add New Category"
        cancel={handleCancel}
        endAction={savedAddCategoryEnded}
        refs={refs}
        reset={true}
      />
    </Modal>
  );
};

export default AddCategory;
