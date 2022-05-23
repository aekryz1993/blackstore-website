import { FC, Dispatch, SetStateAction } from "react";
import Form from "../../../../../../../../shared/modules/Form/SimpleFormWithHeader";
import Modal from "../../../../../../../../shared/modules/Modal";
import useAddProduct from "./useAddProduct";
import { resetInputs } from "../../../../../../../../shared/helpers/util";
import { useProducts } from "../../../../../../../../shared/providers/ProductsProvider";
import { productFields } from "./productFields";
import ImageInput from "./ImageInput";

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
      <Form
        onSubmit={onSubmit}
        fields={productFields()}
        status={productsState.status}
        successMsg="Product has been successfully created"
        errorMsg="The Product is already exist"
        headerTitle="Add New Product"
        cancel={handleCancel}
        refs={refs}
        reset={true}
        endAction={savedAddProductEnded}
        topElementRender={() => (
          <ImageInput
            onFileChange={onFileChange}
            image={imagePreview}
            fileRef={refs[1]}
          />
        )}
      />
    </Modal>
  );
};

export default AddProduct;
