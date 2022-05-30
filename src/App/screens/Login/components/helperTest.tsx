import { AuthContextType } from "@shared/providers/AuthProvider";
import { getApi, postApi, ResponseData } from "@src/apis";
import { url } from "@shared/constants/apiUrls";
import { LoginBody } from "@shared/services/auth";
import { IFormInput, IFormInputFilled } from "./type";

// export const mockLoginFlow = (
//   result: AuthContextType
// ): SubmitHandler<IFormInput> => {
//   return (data: IFormInput) => {
//     async function login() {
//       result?.loginRequest();

//       const response = (await postApi<LoginBody>({
//         url: url.login as string,
//         body: data as IFormInputFilled,
//       })) as ResponseData;
//       console.log(response);

//       const tknRes = (await getApi(url.token as string)) as ResponseData;
//       console.log(tknRes);

//       // act(() => {
//       //   successAuth(response, tknRes, result?.loginSuccessed);
//       // });
//     }
//     login();
//   };
// };

export {};
