import { useAddUserBody } from "./addUserBodyProvider";
import UserIdentifiers from "./UserIdentifiers";
import UserPermissions from "./UserPermissions";

const AddUser = ({
  setisopen,
  isopen,
}: {
  setisopen: React.Dispatch<React.SetStateAction<boolean>>;
  isopen: boolean;
}) => {
  const { page } = useAddUserBody();

  return (
    <>
      {page === 1 ? (
        <UserIdentifiers setisopen={setisopen} isopen={isopen} />
      ) : page === 2 ? (
        <UserPermissions setisopen={setisopen} isopen={isopen} />
      ) : (
        <></>
      )}
    </>
  );
};

export default AddUser;
