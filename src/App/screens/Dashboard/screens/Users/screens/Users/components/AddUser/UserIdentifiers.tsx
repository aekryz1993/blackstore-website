import { resetInputs } from "../../../../../../../../../shared/helpers/util";
import { FC, Dispatch, SetStateAction } from "react";
import Modal from "../../../../../../../../../shared/modules/Modal";
import { userFieldsWithPassword } from "../userFields";
import useAddUser from "./useAddUser";
import { CancelButton } from "../../../../../../../../../styles/components/Button";
import Form from "../../../../../../../../../shared/modules/Form/SimpleForm";
import { HeaderText } from "../../../../../../../../../styles/components/HeaderText";
import { Container } from "../../../../../../../../../styles/layout/Container";
import { Header } from "../../../../../../../../../shared/modules/Form/styles";

const UserIdentifiers: FC<{
  setisopen: Dispatch<SetStateAction<boolean>>;
  isopen: boolean;
}> = ({ setisopen, isopen }) => {
  const handleCancel = () => {
    resetInputs(refs);
    setisopen(false);
  };

  const { onSubmit, refs } = useAddUser();

  return (
    <Modal isopen={isopen}>
      <Header className="flex justify-center items-center h-16 w-full">
        <HeaderText>User Information</HeaderText>
      </Header>
      <Container className="flex flex-col justify-between gap-6 py-16 px-8">
        <Form
          onSubmit={onSubmit}
          fields={userFieldsWithPassword}
          refs={refs}
          textBtn="Next"
          formClsname="flex flex-col gap-10"
          secondBtn={() => (
            <CancelButton onClick={handleCancel}>Cancel</CancelButton>
          )}
        />
      </Container>
    </Modal>
  );
};

export default UserIdentifiers;
