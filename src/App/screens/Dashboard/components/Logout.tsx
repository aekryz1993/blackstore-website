import { MouseEvent, useEffect } from "react";
import { Container } from "../../../../styles/layout/Container";
import { useAuth } from "../../../../shared/providers/AuthProvider";
import { ISLogout } from "../style";
import { logoutFlow } from "../../../../shared/services/auth";
import { Navigate } from "react-router-dom";
import { Status } from "../../../../Enums";
import { useCallbackRef } from "../../../../shared/helpers/util";
import useLocalStorage from "../../../../shared/hooks/useLocalStorage";
import { useNavbar } from "../../../../shared/providers/NavbarContext";

const Logout = () => {
  const { isOpened, setIsOpened } = useNavbar();
  const [token] = useLocalStorage("tokenId");
  const {
    authState,
    logoutRequest,
    logoutSuccessed,
    logoutFailed,
    logoutEnded,
  } = useAuth();
  const { status, user } = authState;

  const savedLogoutEnded = useCallbackRef(logoutEnded);

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    async function submit() {
      event.preventDefault();
      setIsOpened(() => !isOpened);
      await logoutFlow(
        { logoutRequest, logoutSuccessed, logoutFailed },
        token as string
      );
    }
    if (token) submit();
  };

  useEffect(() => {
    const cleanLogout = savedLogoutEnded.current;
    return () => {
      cleanLogout();
    };
  }, [savedLogoutEnded]);

  if (status === Status.SUCCESS && !user) {
    localStorage.removeItem("tokenId");
    return <Navigate to="/login" replace />;
  }

  return (
    <Container className="flex flex-col justify-center align-center w-full flex-grow-3">
      <ISLogout size={20} onClick={handleSubmit} />
    </Container>
  );
};

export default Logout;
