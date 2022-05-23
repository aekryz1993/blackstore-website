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

export async function updateApi<T>({
  url,
  body,
  token,
}: ApiParams<T>): Promise<ResponseData> {
  const response = await fetch(getUrl(url), {
    method: "PUT",
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
  token,
}: ApiParams<T>): Promise<ResponseData> {
  const response = await axios.post(getUrl(url), body, {
    headers: {
      Authorization: `${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  if (response.status.toString().match(/4./)) {
    throw response.data;
  }
  const data = await response.data;
  return { data };
}
