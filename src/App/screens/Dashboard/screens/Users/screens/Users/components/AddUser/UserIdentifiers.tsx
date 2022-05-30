import { FC, Dispatch, SetStateAction, Fragment } from "react";
import { resetInputs } from "../../../../../../../../../shared/helpers/util";
import useAddUser from "./useAddUser";
import { Container } from "../../../../../../../../../styles/layout/Container";
import Form from "./UserIdentifiersForm";

const UserIdentifiers: FC<{
  setisopen: Dispatch<SetStateAction<boolean>>;
}> = ({ setisopen }) => {
  const handleCancel = () => {
    resetInputs(refs);
    setisopen(false);
  };

  const { onSubmit, refs } = useAddUser();

  return (
    <Fragment>
      <Container className="flex flex-col justify-between gap-6 py-16 px-8">
        <Form onSubmit={onSubmit} refs={refs} handleCancel={handleCancel} />
      </Container>
    </Fragment>
  );
};

export default UserIdentifiers;
