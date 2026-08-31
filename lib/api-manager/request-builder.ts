"use server";

import { findRestServiceByName } from "@/app/actions/rest-services/rest-serveice.action";
import { NextRequest } from "next/server";
import { HttpMethod } from "@/enums/method.enum";

export const sendRequest = async (req: NextRequest, path: string[], searchParam: URLSearchParams) => {
  //   const targetUrl = req.url;
  // console.log(path);
  const result = await findRestServiceByName(path[0]);
  if (!result.data?.latinName || !result.success)
    return {
      status: 404,
      success: false,
      message: "خطا در یافتن سرویس" + result.error,
      data: [],
    };

  const restService = result.data;

  const targetService = restService?.restExternalApiSetting;
  const url = targetService?.baseUrl;
  const method = restService?.httpMethod;
  // const body = {}
  const headers = {
    "Content-Type": "application/json",
  };
  const pathParam = path;
  const queryParam = searchParam;

  const targetUrl = new URL(`${url}/${path.join("/")}`);

  Object.entries(queryParam).forEach(([key, value]) => {
    targetUrl.searchParams.append(key, value);
  });

  if (method !== req.method)
    return {
      message: "متد فراخوانی با تعریف همخوانی ندارد",
      data: [],
      status: 500,
      success: false,
    };
  // console.log(JSON.stringify(body));
  const gatewayRequest =
    method === HttpMethod.GET
      ? {
          url: targetUrl,
          init: {
            method,
            headers,
          },
        }
      : {
          url: targetUrl,
          init: {
            method,
            headers,
            body: JSON.stringify(await req.json()),
          },
        };

  console.log(gatewayRequest);
  try {
    const fetchResult = await fetch(gatewayRequest.url, gatewayRequest.init as RequestInit);

    return {
      status: 200,
      success: true,
      data: await fetchResult.json(),
      message: "فراخوانی موفق",
    };
  } catch (err) {
    return {
      status: 500,
      success: false,
      message: "خطا در فراخوانی" + (err as Error).stack,
      data: [],
    };
  }
};
