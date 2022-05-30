import { useState } from "react";
import Form from "../../../../../../../../shared/modules/Form";
import { FormType } from "../../../../../../../../shared/modules/Form/types";
import ImageInput from "./ImageInput";
import { productFields } from "./productFields";
import FieldItems from "../../../../../../../../shared/modules/Form/FieldItems";
import { Dispatch } from "../../../../../../../../shared/constants/types";
import HeaderForm from "../../../../../../../../shared/modules/Form/HeaderForm";

type Props = Pick<FormType, "onSubmit" | "status" | "refs"> & {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string | null | undefined;
  savedAddProductEnded: Dispatch;
  handleCancel: () => void;
};

const AddProductForm = ({
  onSubmit,
  status,
  refs,
  onFileChange,
  imagePreview,
  savedAddProductEnded,
  handleCancel,
}: Props) => {
  const [errors, setErrors] = useState({});
  const definedRefs = refs as React.RefObject<HTMLInputElement>[];
  return (
    <Form
      fields={productFields()}
      refs={refs}
      status={status}
      reset={true}
      onSubmit={onSubmit}
      setErrors={setErrors}
    >
      <HeaderForm
        status={status}
        headerTitle="Add New Product"
        cancel={handleCancel}
        setErrors={setErrors}
      />
      <FieldItems
        fields={productFields()}
        refs={refs}
        fieldClsName="px-8 pb-12"
        topElementRender={() => (
          <ImageInput
            onFileChange={onFileChange}
            image={imagePreview}
            fileRef={definedRefs[1]}
          />
        )}
        errors={errors}
        endAction={savedAddProductEnded}
        successMsg="Product has been successfully created"
        errorMsg="The Product is already exist"
        status={status}
      />
    </Form>
  );
};

export default AddProductForm;
