import { Container } from "../../../../styles/layout/Container";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../../../shared/providers/AuthProvider";
import { Head3, SubText } from "../../../../styles/components/Text";

const Profile = () => {
  const { authState } = useAuth();
  const { user } = authState;
  return (
    <Container className="flex flex-col items-center justify-center w-full flex-grow-0 gap-2 py-6">
      <FaUserCircle size={80} />
      <Container className="flex flex-col items-center justify-center">
        <Head3 className="w-40">{`${user?.firstname} ${user?.lastname}`}</Head3>
        <SubText>{user?.username}</SubText>
        <SubText>{user?.email}</SubText>
      </Container>
    </Container>
  );
};

export default Profile;
