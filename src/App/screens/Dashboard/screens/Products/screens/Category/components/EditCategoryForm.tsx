import { useState } from "react";
import Form from "../../../../../../../../shared/modules/Form";
import { FormType } from "../../../../../../../../shared/modules/Form/types";
import FieldItems from "../../../../../../../../shared/modules/Form/FieldItems";
import {
  Dispatch,
  Field,
} from "../../../../../../../../shared/constants/types";
import HeaderForm from "../../../../../../../../shared/modules/Form/HeaderForm";

type Props = Pick<FormType, "onSubmit" | "status" | "refs"> & {
  endAction: Dispatch;
  handleCancel: () => void;
  fields: Readonly<Field[]>;
};

const EditCategoryForm = ({
  onSubmit,
  status,
  refs,
  endAction,
  handleCancel,
  fields,
}: Props) => {
  const [errors, setErrors] = useState({});

  return (
    <Form
      fields={fields}
      refs={refs}
      status={status}
      reset={false}
      onSubmit={onSubmit}
      setErrors={setErrors}
    >
      <HeaderForm
        status={status}
        headerTitle="Edit Category"
        cancel={handleCancel}
        setErrors={setErrors}
      />
      <FieldItems
        fields={fields}
        refs={refs}
        fieldClsName="px-8 pb-12"
        errors={errors}
        endAction={endAction}
        successMsg="Category has been successfully updated"
        errorMsg="Error"
        status={status}
      />
    </Form>
  );
};

export default EditCategoryForm;
