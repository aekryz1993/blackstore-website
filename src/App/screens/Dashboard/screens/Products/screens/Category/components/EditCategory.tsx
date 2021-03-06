import { useState } from "react";
import Modal from "../../../../../../../../shared/modules/Modal";
import { Button } from "../../../../../../../../styles/components/Button";
import { TextButton } from "../../../../../../../../styles/components/Text";
import { categoryFields } from "./categoryFields";
import { IFormInputOptions } from "../../Product/type";
import { useCategories } from "../../../../../../../../shared/providers/CategoriesProvider";
import { resetInputs } from "../../../../../../../../shared/helpers/util";
import useEditCategory from "./useEditCategory";
import { Container } from "../../../../../../../../styles/layout/Container";
import Form from "./EditCategoryForm";

const EditCategory = ({
  categoryValues,
  id,
}: {
  categoryValues: IFormInputOptions | undefined;
  id: string | undefined;
}) => {
  const [isopen, setisopen] = useState(false);
  const {
    categoriesState,
    updateCategoryRequest,
    updateCategorySuccessed,
    updateCategoryFailed,
    updateCategoryEnded,
  } = useCategories();

  const { onSubmit, refs, savedUpdateCategoryEnded } = useEditCategory({
    categoriesState,
    updateCategoryRequest,
    updateCategorySuccessed,
    updateCategoryFailed,
    updateCategoryEnded,
    id,
  });

  const handleCancel = () => {
    resetInputs(refs);
    savedUpdateCategoryEnded();
    setisopen(false);
  };

  return (
    <Container>
      <Button
        className="center-x w-4xl sm__w-3xl md__w-xl lg__w-lg xl__w-lg"
        onClick={() => setisopen(true)}
      >
        <TextButton>Edit Category</TextButton>
      </Button>
      <Modal isopen={isopen}>
        <Form
          onSubmit={onSubmit}
          status={categoriesState.status}
          refs={refs}
          endAction={savedUpdateCategoryEnded}
          handleCancel={handleCancel}
          fields={categoryFields(categoryValues)}
        />
      </Modal>
    </Container>
  );
};

export default EditCategory;
