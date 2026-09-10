export interface RestAuthParamInput {
  paramType: string;
  paramName: string;
  paramValue: string;
}

export interface RestAuthSettingInput {
  authServiceUrl: string;
  authMethod: string;
  restAuthServiceParam: RestAuthParamInput[];
}

export interface RestDatabaseSettingInput {
  dbType: string;
  dbServer: string;
  dbPort: string;
  dbUsername: string;
  dbPassword: string;
  dbName: string;
  dbViewName: string;
}

export interface RestExternalParamInput {
  paramType: string;
  paramName: string;
  paramValue: string;
}

export interface RestExternalSettingInput {
  baseUrl: string;
  hasAuth: boolean;
  restExternalApiParam?: RestExternalParamInput[];
}

export interface RestServiceInput {
  persianName: string;
  latinName: string;
  httpMethod: string;
  restType: string;
  restAuthServiceSetting?: RestAuthSettingInput | null;
  restDatabaseSetting?: RestDatabaseSettingInput | null;
  restExternalApiSetting?: RestExternalSettingInput | null;
}
