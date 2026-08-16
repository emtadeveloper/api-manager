"use server";

import { NextRequest, NextResponse } from "next/server";
import { sendRequest } from "./request-builder";
import { findRestServiceByName } from "@/app/actions/rest-services/rest-serveice.action";
import { RestType } from "@/utils/rest-type.enum";
import { DatabaseType } from "@/utils/database-type.enum";
import { getViewData } from "@/app/actions/postgres/get-view-data";
import { success, unknown } from "zod";
import { message } from "antd";

export const executeGatewayRequest = async (
  req: NextRequest,
  path?: string[],
) => {
  const searchParams = req.nextUrl.searchParams;
  let response: NextResponse = null!;
  const service = await findRestServiceByName(path![0]);
  if (!service.data?.latinName || !service.success)
    response = NextResponse.json({
      status: 404,
      success: false,
      message: "خطا در یافتن سرویس" + service.error,
      data: [],
    });

  if (service.data?.httpMethod !== req.method)
    response = NextResponse.json({
      message: "متد فراخوانی با تعریف همخوانی ندارد",
      data: [],
      status: 500,
      success: false,
    });
  if (service.data?.restType === RestType.DATABASEDIRECT) {
    const config = service.data.restDatabaseSetting!;
    let url = "";
    if (config.dbType === DatabaseType.POSTGRES) {
      url = `postgresql://${config.dbUsername}:${config.dbPassword}@${config.dbServer}:${config.dbPort}/${config.dbName}`;

      const result = await getViewData(url, config.dbViewName!);
      response = NextResponse.json(
        result.success
          ? {
              success: true,
              status: 200,
              data: result.data,
              message: "فراخوانی با موفقیت انجام شد",
            }
          : { success: false, status: 500, data: [], message: result.error },
      );
    } else {
      const url = `sqlserver://${config.dbServer}:${config.dbPort};database=${config.dbName};user=${config.dbUsername};password=${config.dbPassword};trustServerCertificate=true`;
      const result = await getViewData(url, config.dbViewName!);
      response = NextResponse.json(
        result.success
          ? {
              success: true,
              status: 200,
              data: result.data,
              message: "فراپخوانی با موفقیت انجام شد",
            }
          : { success: false, status: 500, data: [], message: result.error },
      );
    }
  } else {
    const request = await sendRequest(req, path!, searchParams);

    response = NextResponse.json(request);
  }

  return response;
};
