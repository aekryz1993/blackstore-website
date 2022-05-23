// import { resetInputs } from "../../../../../../../../../shared/helpers/util";
import { useUsers } from "../../../../../../../../../shared/providers/UsersProvider";
import { FC, Dispatch, SetStateAction } from "react";
import Modal from "../../../../../../../../../shared/modules/Modal";
import useUserPermissions from "./useUserPermissions";
import { adminFields, permissionsFields } from "../permissionsFields";
import { useAddUserBody } from "./addUserBodyProvider";
import { HeaderText } from "../../../../../../../../../styles/components/HeaderText";
import { Container } from "../../../../../../../../../styles/layout/Container";
import { Header } from "../../../../../../../../../shared/modules/Form/styles";
import Form from "../../../../../../../../../shared/modules/Form/SimpleForm";
import { CancelButton } from "../../../../../../../../../styles/components/Button";
import CheckboxItem from "../../../../../../../../../shared/modules/Form/CheckboxItem";
import { useMultiRef } from "../../../../../../../../../shared/hooks/useMultiRef";
import { OneField } from "../../../../../../../../../shared/constants/types";

const UserPermissions: FC<{
  setisopen: Dispatch<SetStateAction<boolean>>;
  isopen: boolean;
}> = ({ setisopen, isopen }) => {
  const { userBody, setUserBody, setPage } = useAddUserBody();
  const [isAdmin] = useMultiRef<HTMLInputElement>(1);

  const {
    usersState,
    addUserRequest,
    addUserSuccessed,
    addUserFailed,
    addUserEnded,
  } = useUsers();

  const { onSubmit, refs, savedAddUserEnded } = useUserPermissions({
    addUserRequest,
    addUserSuccessed,
    addUserFailed,
    addUserEnded,
  });

  const handleCancel = () => {
    setPage(1);
  };

  const handleChange =
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserBody({
        ...userBody,
        [key]: event.target.checked,
      });
    };

  const handleChangePermissions =
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserBody({
        ...userBody,
        permissions: {
          ...userBody.permissions,
          [key]: event.target.checked,
        },
      });
    };

  return (
    <Modal isopen={isopen}>
      <Header className="flex justify-center items-center h-16 w-full">
        <HeaderText>User Permissions</HeaderText>
      </Header>
      <Container className="flex flex-col gap-2 py-16 px-8">
        <CheckboxItem
          handleChange={handleChange(adminFields().name)}
          itemRef={isAdmin}
          field={adminFields()}
        />
        {userBody.isAdmin &&
          permissionsFields().map((permission) => {
            const field = permission as OneField;
            return (
              <CheckboxItem
                key={field.id}
                handleChange={handleChangePermissions(field.name)}
                itemRef={refs && refs[field.id as number]}
                field={permissionsFields()[field.id as number] as OneField}
              />
            );
          })}
      </Container>
      <Form
        onSubmit={onSubmit}
        status={usersState.status}
        // successMsg="Category has been successfully created"
        // errorMsg="The Category is already exist"
        refs={refs}
        // endAction={savedAddUserEnded}
        formClsname="px-8 mb-4"
        textBtn="Add User"
        secondBtn={() => (
          <CancelButton onClick={handleCancel}>Prev</CancelButton>
        )}
      />
    </Modal>
  );
};

export default UserPermissions;
