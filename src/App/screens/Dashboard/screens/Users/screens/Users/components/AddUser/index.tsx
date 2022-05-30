import { initialBody, useAddUserBody } from "./addUserBodyProvider";
import UserIdentifiers from "./UserIdentifiers";
import UserPermissions from "./UserPermissions";
import { HeaderText } from "../../../../../../../../../styles/components/HeaderText";
import { Header } from "../../../../../../../../../shared/modules/Form/styles";
import Modal from "../../../../../../../../../shared/modules/Modal";
import { CloseBtn } from "../style";

const AddUser = ({
  setisopen,
  isopen,
}: {
  setisopen: React.Dispatch<React.SetStateAction<boolean>>;
  isopen: boolean;
}) => {
  const { page, setPage, setUserBody } = useAddUserBody();

  const handleClose = () => {
    setUserBody(initialBody);
    setPage(1);
    setisopen(false);
  };

  return (
    <Modal isopen={isopen}>
      <Header className="flex justify-between items-center h-16 w-full px-4">
        <HeaderText>Add new user</HeaderText>
        <CloseBtn size={40} onClick={handleClose} />
      </Header>
      {page === 1 ? (
        <UserIdentifiers setisopen={setisopen} />
      ) : page === 2 ? (
        <UserPermissions />
      ) : (
        <></>
      )}
    </Modal>
  );
};

export default AddUser;
