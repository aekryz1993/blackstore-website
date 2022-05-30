import { FC, Dispatch, SetStateAction } from "react";
import Modal from "../../../../../../../../shared/modules/Modal";
import useAddProduct from "./useAddProduct";
import { resetInputs } from "../../../../../../../../shared/helpers/util";
import { useProducts } from "../../../../../../../../shared/providers/ProductsProvider";
import AddProductForm from "./AddProductForm";

const AddProduct: FC<{
  setisopen: Dispatch<SetStateAction<boolean>>;
  isopen: boolean;
}> = ({ setisopen, isopen }) => {
  const {
    productsState,
    addProductRequest,
    addProductSuccessed,
    addProductFailed,
    addProductEnded,
  } = useProducts();

  const {
    onSubmit,
    refs,
    onFileChange,
    imagePreview,
    savedAddProductEnded,
    setPreview,
  } = useAddProduct({
    addProductRequest,
    addProductSuccessed,
    addProductFailed,
    addProductEnded,
  });

  const handleCancel = () => {
    savedAddProductEnded();
    resetInputs(refs);
    setPreview(null);
    setisopen(false);
  };
  return (
    <Modal isopen={isopen}>
      <AddProductForm
        onSubmit={onSubmit}
        status={productsState.status}
        refs={refs}
        onFileChange={onFileChange}
        imagePreview={imagePreview}
        savedAddProductEnded={savedAddProductEnded}
        handleCancel={handleCancel}
      />
    </Modal>
  );
};

export default AddProduct;
