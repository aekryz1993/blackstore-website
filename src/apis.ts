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

export async function downloadFileApi(
  url: string,
  token?: string
): Promise<any> {
  const response = await fetch(getUrl(url), {
    method: "GET",
    headers: {
      Authorization: `${token}`,
    },
  });
  const blob = await response.blob();
  const blobUrl = window.URL.createObjectURL(blob);
  let link = document.createElement("a");
  link.href = blobUrl;
  link.download = url.split("/")[url.split("/").length - 1];
  link.click();
}
