import axios from "axios";
import getUrl from "./shared/constants/apiUrls";

interface ApiParams<T> {
  url: string | undefined;
  body: T;
  token?: string;
}

export interface ResponseData {
  data?: any;
  error?: any;
}

export async function getApi(
  url: string | undefined,
  token?: string
): Promise<ResponseData> {
  const response = await fetch(getUrl(url), {
    method: "GET",
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw data;
  }
  return { data };
}

export async function postApi<T>({
  url,
  body,
  token,
}: ApiParams<T>): Promise<ResponseData> {
  const response = await fetch(getUrl(url), {
    method: "POST",
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (!response.ok) {
    throw data;
  }
  return { data };
}

export async function formDataApi<T>({
  url,
  body,
}: ApiParams<T>): Promise<ResponseData | Error> {
  try {
    const response = await axios.post(getUrl(url), body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = await response.data;
    return { data };
  } catch (error) {
    return error as Error;
  }
}
