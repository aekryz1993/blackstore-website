import { useUsers } from "../../../../../../../shared/providers/UsersProvider";
import Table from "../../../../../../../shared/modules/Table";
import { Container } from "../../../../../../../styles/layout/Container";
import { headers, labels } from "./helper";
import useFetchUsers from "./useFetchUsers";
import { AddBtn } from "../../../../../../../styles/components/Button";
import { useTheme } from "styled-components";
import { useState } from "react";
import { AddUserBodyProvider } from "./components/AddUser/addUserBodyProvider";
import AddUser from "./components/AddUser";

const UsersScreen = () => {
  const theme = useTheme();
  const [isopen, setisopen] = useState(false);

  const {
    usersState,
    fetchUsersRequest,
    fetchUsersSuccessed,
    fetchUsersFailed,
    fetchUsersEnded,
    fetchPrevUsers,
    fetchNextUsers,
  } = useUsers();

  const { onPrev, onNext } = useFetchUsers({
    usersState,
    fetchUsersRequest,
    fetchUsersSuccessed,
    fetchUsersFailed,
    fetchUsersEnded,
    fetchPrevUsers,
    fetchNextUsers,
  });

  return (
    <Container className="flex justify-center">
      <Table
        headers={headers}
        fields={usersState.currentUsers}
        labels={labels}
        currentPage={usersState.page + 1}
        totalPages={usersState.totalPages}
        onPrev={onPrev}
        onNext={onNext}
      />
      <AddBtn
        size={50}
        color={theme.colors.primary.light}
        onClick={() => setisopen(true)}
      />
      <AddUserBodyProvider>
        <AddUser setisopen={setisopen} isopen={isopen} />
      </AddUserBodyProvider>
    </Container>
  );
};

export default UsersScreen;
