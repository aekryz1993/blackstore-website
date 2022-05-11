import { rest } from "msw";
import { LoginBody } from "@shared/services/auth";
import { faileLogin, loginBody, loginResponse } from "./mocksData/session";
import getUrl, { url } from "../shared/constants/apiUrls";
import { isMatch } from "../shared/helpers/util";

const handlers = [
  rest.post<LoginBody>(getUrl(url.login as string), (req, res, ctx) => {
    const { username, password } = req.body;
    if (!isMatch(username, loginBody.username))
      return res(ctx.status(401), ctx.json(faileLogin(username)));
    if (!isMatch(password, loginBody.password))
      return res(ctx.status(401), ctx.json(faileLogin(password)));
    return res(ctx.status(200), ctx.json(loginResponse.data));
  }),

  rest.get(getUrl(url.session as string), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(loginResponse.data));
  }),

  rest.get(getUrl(url.products as string), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(loginResponse.data));
  }),
];

export default handlers;
