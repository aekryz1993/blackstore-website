import { getApi, postApi, ResponseData } from "@src/apis";
import { url } from "@shared/constants/apiUrls";
import {
  loginResponse,
  // faileLogin,
  loginBody,
} from "@mocks/mocksData/session";
import { renderHook, act } from "@testing-library/react-hooks";
import Provider from "@shared/providers";
import { useAuth } from "@shared/providers/AuthProvider";
import { Status } from "@src/Enums";
import { LoginBody, successLogin } from "../../../shared/services/auth";

describe("login rest api response", () => {
  test("successfully login", async () => {
    const response = await postApi<LoginBody>({
      url: url.login,
      body: loginBody,
    });
    expect(response).toEqual(loginResponse);
  });

  // test("login username doesn't exist", async () => {
  //   const body = {
  //     username: "notexist",
  //     password: "Password",
  //   };
  //   const response = await postApi<LoginBody>({
  //     url: url.login,
  //     body,
  //   });
  //   expect(response).toEqual(faileLogin(body.username));
  // });

  // test("login password doesn't exist", async () => {
  //   const body = {
  //     username: "username",
  //     password: "incorrect",
  //   };
  //   const response = await postApi<LoginBody>({
  //     url: url.login,
  //     body,
  //   });
  //   expect(response).toEqual(faileLogin(body.password));
  // });
});

export function getResult() {
  const wrapper: React.FC = ({ children }) => <Provider>{children}</Provider>;
  const { result } = renderHook(() => useAuth(), { wrapper });
  return result;
}

describe("login flow", () => {
  test("trigger request login flow", async () => {
    const result = getResult();
    expect(result.current.authState.status).toBe(Status.PENDING);
    act(() => {
      result.current.loginRequest();
    });
    expect(result.current.authState.status).toBe(Status.BTNLOADING);
  });

  test("trigger successful login flow", async () => {
    const result = getResult();
    const response = (await postApi<LoginBody>({
      url: url.login,
      body: loginBody,
    })) as ResponseData;
    expect(response).toEqual(loginResponse);
    expect(result.current.authState.error).toBe(null);

    act(() => {
      successLogin(response, result.current.loginSuccessed);
    });
    expect(result.current.authState.status).toBe(Status.SUCCESS);
    expect(result.current.authState.error).toBe(null);
  });

  // test("trigger failed login flow", async () => {
  //   const result = getResult();
  //   const body = {
  //     username: "invalid",
  //     password: "invalid",
  //   };
  //   const response = (await postApi<LoginBody>({
  //     url: url.login,
  //     body,
  //   })) as Error;
  //   expect(response).toEqual(faileLogin(body.username));

  //   act(() => {
  //     failedAuth(response, result.current.loginFailed);
  //   });
  //   expect(result.current.authState.status).toBe(Status.ERROR);
  //   expect(result.current.authState.error).toBe(faileLogin(body.username));
  //   expect(result.current.authState.user).toEqual(null);
  //   expect(result.current.authState.isAuth).toBe(false);
  // });

  test("trigger end login flow", async () => {
    const result = getResult();
    act(() => {
      result.current.loginEnded();
    });
    expect(result.current.authState.status).toBe(Status.PENDING);
    expect(result.current.authState.error).toBe(null);
  });
});
