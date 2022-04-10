interface Url {
  [property: string]: string;
}

export const url: Readonly<Url> = {
  login: "api/auth/login",
  session: "api/userSession/session",
};

function getUrl(url: string) {
  return `${process.env.REACT_APP_ORIGIN}/${url}`;
}

export default getUrl;
