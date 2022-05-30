import { useUsers } from "../../../../../../../../../shared/providers/UsersProvider";
import { Fragment } from "react";
import useUserPermissions from "./useUserPermissions";
import { adminFields, permissionsFields } from "../permissionsFields";
import { useAddUserBody } from "./addUserBodyProvider";
import { Container } from "../../../../../../../../../styles/layout/Container";
import CheckboxItem from "../../../../../../../../../shared/modules/Form/CheckboxItem";
import { useMultiRef } from "../../../../../../../../../shared/hooks/useMultiRef";
import { OneField } from "../../../../../../../../../shared/constants/types";
import { Message } from "../../../../../../../../../shared/components/Massage";
import { Status } from "../../../../../../../../../Enums";
import Form from "./UserPermissionsForm";

const UserPermissions = () => {
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

  const handlePrev = () => {
    setPage(() => 1);
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
    <Fragment>
      {(usersState.status === Status.SUCCESS ||
        usersState.status === Status.ERROR) && (
        <Message
          endAction={savedAddUserEnded}
          success="User has been successfully created"
          error="The User is already exist"
          status={usersState.status}
        />
      )}
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
        refs={refs}
        handlePrev={handlePrev}
      />
    </Fragment>
  );
};

export default UserPermissions;
