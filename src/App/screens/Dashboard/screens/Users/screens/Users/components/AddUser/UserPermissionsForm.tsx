import { useState } from "react";
import Form from "../../../../../../../../../shared/modules/Form";
import { FormType } from "../../../../../../../../../shared/modules/Form/types";
import BottomBtnsForm from "../../../../../../../../../shared/modules/Form/BottomBtnsForm";
import { CancelButton } from "../../../../../../../../../styles/components/Button";

type Props = Pick<FormType, "onSubmit" | "refs" | "status"> & {
  handlePrev: () => void;
};

const UserPermissionsForm = ({ onSubmit, refs, status, handlePrev }: Props) => {
  const [, setErrors] = useState({});

  return (
    <Form
      refs={refs}
      status={status}
      formClsname="px-8 mb-4"
      onSubmit={onSubmit}
      setErrors={setErrors}
    >
      <BottomBtnsForm
        textBtn="Add User"
        secondBtn={() => <CancelButton onClick={handlePrev}>Prev</CancelButton>}
      />
    </Form>
  );
};

export default UserPermissionsForm;
