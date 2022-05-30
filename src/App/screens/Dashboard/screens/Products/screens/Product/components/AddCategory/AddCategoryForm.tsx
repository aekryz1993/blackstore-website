import { useState } from "react";
import Form from "../../../../../../../../../shared/modules/Form";
import { FormType } from "../../../../../../../../../shared/modules/Form/types";
import FieldItems from "../../../../../../../../../shared/modules/Form/FieldItems";
import { Dispatch } from "../../../../../../../../../shared/constants/types";
import HeaderForm from "../../../../../../../../../shared/modules/Form/HeaderForm";
import { categoryFields } from "../../../Category/components/categoryFields";

type Props = Pick<FormType, "onSubmit" | "status" | "refs"> & {
  endAction: Dispatch;
  handleCancel: () => void;
};

const AddCategoryForm = ({
  onSubmit,
  status,
  refs,
  endAction,
  handleCancel,
}: Props) => {
  const [errors, setErrors] = useState({});

  return (
    <Form
      fields={categoryFields()}
      refs={refs}
      status={status}
      reset={true}
      onSubmit={onSubmit}
      setErrors={setErrors}
    >
      <HeaderForm
        status={status}
        headerTitle="Add New Category"
        cancel={handleCancel}
        setErrors={setErrors}
      />
      <FieldItems
        fields={categoryFields()}
        refs={refs}
        fieldClsName="px-8 pb-12"
        errors={errors}
        endAction={endAction}
        successMsg="Category has been successfully created"
        errorMsg="The Category is already exist"
        status={status}
      />
    </Form>
  );
};

export default AddCategoryForm;
