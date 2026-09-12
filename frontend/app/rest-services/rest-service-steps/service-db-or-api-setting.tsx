"use client";
import { RestType } from "@/enums/rest-type.enum";
import { useFormContext, useWatch } from "react-hook-form";
import ServiceDbSetting from "./service-db-setting";
import ServiceExternalApiSetting from "./service-external-api-setting";

const ServiceDbOrApiSetting = () => {
  const { control } = useFormContext();
  const restType = useWatch({ control, name: "restType" });
  const method = useWatch({ control, name: "httpMethod" });

  return (
    <div>
      <ul className="text-blue-500 flex flex-row gap-5 [&>li]:border [&>li]:p-2 [&>li]:rounded-xl mb-2">
        {restType && (
          <li>
            <strong>نوع ارتباط: </strong>
            {restType === RestType.DATABASEDIRECT
              ? "اتصال به دیتابیس"
              : "فراخوانی وب سرویس خارجی"}
          </li>
        )}
        {method && (
          <li>
            <strong>متد ارتباط: </strong>
            {method}
          </li>
        )}
      </ul>

      {restType === RestType.DATABASEDIRECT ? (
        <ServiceDbSetting />
      ) : (
        <ServiceExternalApiSetting />
      )}
    </div>
  );
};

export default ServiceDbOrApiSetting;
