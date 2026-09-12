import { post, request, type RequestConfig } from "./fetch";

export interface BackendResult<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  errors?: Array<{ path: Array<string | number>; message: string }> | string;
  message?: string;
}

const backendRequest = <T = unknown>(
  url: string,
  config: RequestConfig,
) => request(url, config) as Promise<BackendResult<T>>;
const backendPost = <T = unknown>(
  url: string,
  data: unknown,
  headers?: Record<string, string>,
) => post(url, data, headers) as Promise<BackendResult<T>>;

export const createRestService = (id: number, data: unknown) =>
  backendRequest(id ? `/api/rest-services/${id}` : "/api/rest-services", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const getAllRestServices = () =>
  backendRequest("/api/rest-services", { method: "GET" });

export const removeService = (id: number) =>
  backendRequest(`/api/rest-services/${id}`, { method: "DELETE" });

export const findRestServiceById = (id: number) =>
  backendRequest(`/api/rest-services/${id}`, { method: "GET" });

export const findRestServiceByName = (name: string) =>
  backendRequest(`/api/rest-services/by-name/${encodeURIComponent(name)}`, {
    method: "GET",
  });

export const CreateUser = (user: unknown) => backendPost("/api/users", user);

export const findAllUsers = () =>
  backendRequest<{
    firstName?: string | null;
    lastName?: string | null;
    username?: string | null;
  } | null>("/api/users/current", {
    method: "GET",
  });

export const CreateDatabaseSettings = (settings: unknown) =>
  backendPost("/api/database-settings", settings, { method: "PUT" });

export const findAllDbSetting = () =>
  backendRequest<{
    dbType?: string | null;
    dbServer?: string | null;
    dbPort?: string | null;
    dbUsername?: string | null;
    dbPassword?: string | null;
    dbName?: string | null;
  } | null>("/api/database-settings", { method: "GET" });

export const getDatabases = (
  dbType: "POSTGRES" | "SQL" | "ORACLE",
  connectionString: string,
) => backendPost("/api/external-database/list", { dbType, connectionString });

export const getViewData = (
  inputUrl: string,
  viewName: string,
  dbType: "POSTGRES" | "SQL" | "ORACLE" = inputUrl.startsWith("postgres")
    ? "POSTGRES"
    : "SQL",
) =>
  backendPost("/api/external-database/view-data", {
    dbType,
    connectionString: inputUrl,
    viewName,
  });

export const AuthTest = (authDto: { authServiceUrl: string }) =>
  backendPost("/api/rest-services/tests/auth", authDto);

export const ApiTest = (apiDto: { baseUrl: string }, serviceName: string) =>
  backendPost("/api/rest-services/tests/api", { apiDto, serviceName });
