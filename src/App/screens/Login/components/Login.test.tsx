import { render, fireEvent, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import { GlobalWrapper } from "@shared/helpers/wrappers";
import { AuthProvider } from "@shared/providers/AuthProvider";
import { mockLoginFlow } from "./helperTest";
import { getResult } from "../loginFlow.test";

type InputValue = {
  value: string;
};

describe("login UI", () => {
  test("allows the user to login successfully", async () => {
    const _getByTestId = screen.getByTestId;
    const result = getResult();

    // render(
    //   <GlobalWrapper>
    //     <AuthProvider>
    //       <Login
    //         onSubmit={mockLoginFlow(authResult.current)}
    //         status={authResult.current.authState?.status}
    //         error={authResult.current.authState.error}
    //       />
    //     </AuthProvider>
    //   </GlobalWrapper>
    // );

    // // const body = {
    // //   username: "username",
    // //   password: "Password",
    // // };

    // const usernameInputEl: HTMLInputElement & InputValue =
    //   _getByTestId(/username/i);
    // const passwordInputEl: HTMLInputElement & InputValue =
    //   _getByTestId(/password/i);
    // const submitButtonEl: HTMLButtonElement = _getByTestId(/submit/i);

    // userEvent.type(usernameInputEl, "username");
    // userEvent.type(passwordInputEl, "Password");

    // // console.log(passwordInputEl.value);

    // // console.log(submitButtonEl.className);
    // // console.log(submitButtonEl.innerHTML);

    // // eslint-disable-next-line testing-library/no-unnecessary-act
    // await act(async () => {
    //   await fireEvent.submit(submitButtonEl);
    // });

    // console.log(submitButtonEl.innerHTML);
  });
});
