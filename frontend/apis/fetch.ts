export type HttpMethod =
  | "DELETE"
  | "GET"
  | "PATCH"
  | "POST"
  | "PUT";

export type RequestHeaders = Record<string, string>;

export type QueryParameter = string | number | boolean | null | undefined;

export interface RequestConfig {
  method: HttpMethod;
  headers?: RequestHeaders;
  nextConfig?: RequestInit;
  body?: BodyInit | null;
}

export interface ApiResponse {
  success?: boolean;
  message?: string;
  user?: unknown;
  [key: string]: unknown;
}

interface ApiConfig {
  headers: RequestHeaders;
  nextConfig: RequestInit;
}

const apiConfig = (
  customHeaders: RequestHeaders = {},
  nextConfig: RequestInit = {},
): ApiConfig => ({
  headers: {
    "Content-Type": "application/json",
    ...customHeaders,
  },
  nextConfig: {
    ...nextConfig,
  },
});

export const request = async <T = ApiResponse>(
  url: string,
  config: RequestConfig,
): Promise<T | null> => {
  try {
    const { headers, nextConfig } = apiConfig(
      config.headers,
      config.nextConfig,
    );

    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
    const requestUrl = /^https?:\/\//i.test(url)
      ? url
      : `${baseUrl.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;

    const response = await fetch(requestUrl, {
      ...nextConfig,
      method: config.method,
      headers,
      body: config.body,
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    if (!text) return null;

    const data: unknown = JSON.parse(text);
    return data as T;
  } catch (error) {
    console.warn(`Fetch ${config.method} Error:`, error);
    throw error;
  }
};

export const get = <T = ApiResponse>(
  url: string,
  params: Record<string, QueryParameter> = {},
  headers?: RequestHeaders,
  nextConfig?: RequestInit,
): Promise<T | null> => {
  const queryString = Object.keys(params)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(params[key]))}`,
    )
    .join("&");

  return request<T>(`${url}?${queryString}`, {
    method: "GET",
    headers,
    nextConfig,
  });
};

export const post = <T = ApiResponse>(
  url: string,
  data: unknown = {},
  headers?: RequestHeaders,
  nextConfig?: RequestInit,
): Promise<T | null> =>
  request<T>(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers,
    nextConfig,
  });

export const put = <T = ApiResponse>(
  url: string,
  data: unknown = {},
  headers?: RequestHeaders,
  nextConfig?: RequestInit,
): Promise<T | null> =>
  request<T>(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers,
    nextConfig,
  });

export const patch = <T = ApiResponse>(
  url: string,
  data: unknown = {},
  headers?: RequestHeaders,
  nextConfig?: RequestInit,
): Promise<T | null> =>
  request<T>(url, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers,
    nextConfig,
  });
