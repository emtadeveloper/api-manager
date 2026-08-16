"use server";

import { RestAuthServiceSettingDto } from "@/app/dto/rest-auth-service-setting-dto";
import { RestExternalApiSettingDto } from "@/app/dto/rest-external-api-setting.dto";

export const AuthTest = async (authDto: RestAuthServiceSettingDto) => {
  try {
    const result = await fetch(authDto.authServiceUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

      
    });

    return { success: true, data: await result.json() };
  } catch (error) {
    return {
      success: false,
      error: "خطا در بازیابی اطلاعات" + (error as Error).message,
    };
  }
};

export const ApiTest = async (apiDto: RestExternalApiSettingDto, serviceName: string) => {
  try {
     
    console.log({serviceName});
    const result = await fetch(apiDto.baseUrl.concat(`/${serviceName}`), {
      method: "GET",
      cache: "no-store", // optional
    });
    return { success: true, data:  await result.json() };
  } catch (error) {
    return {
      success: false,
      error: "خطا در بازیابی اطلاعات" + (error as Error).message,
    };
  }
};
