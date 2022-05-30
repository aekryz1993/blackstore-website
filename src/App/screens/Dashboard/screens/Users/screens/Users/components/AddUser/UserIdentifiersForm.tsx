import { useState } from "react";
import Form from "../../../../../../../../../shared/modules/Form";
import { FormType } from "../../../../../../../../../shared/modules/Form/types";
import FieldItems from "../../../../../../../../../shared/modules/Form/FieldItems";
import { userFieldsWithPassword } from "../userFields";
import BottomBtnsForm from "../../../../../../../../../shared/modules/Form/BottomBtnsForm";
import { CancelButton } from "../../../../../../../../../styles/components/Button";

type Props = Pick<FormType, "onSubmit" | "refs"> & {
  handleCancel: () => void;
};

const UserIdentifiersForm = ({ onSubmit, refs, handleCancel }: Props) => {
  const [errors, setErrors] = useState({});

  return (
    <Form
      fields={userFieldsWithPassword}
      refs={refs}
      formClsname="flex flex-col gap-10"
      onSubmit={onSubmit}
      setErrors={setErrors}
    >
      <FieldItems
        fields={userFieldsWithPassword}
        refs={refs}
        fieldClsName="pb-12"
        errors={errors}
      />
      <BottomBtnsForm
        textBtn="Next"
        secondBtn={() => (
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        )}
      />
    </Form>
  );
};

export default UserIdentifiersForm;
