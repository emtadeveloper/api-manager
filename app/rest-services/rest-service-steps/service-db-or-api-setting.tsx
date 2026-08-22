"use client";
import { HttpMethod } from "@/types/enums/method.enum";
import { RestType } from "@/types/enums/rest-type.enum";
import { FormInstance } from "antd";
import ServiceDbSetting from "./service-db-setting";
import ServiceExternalApiSetting from "./service-external-api-setting";
interface Props {
  form: FormInstance;
}
const ServiceDbOrApiSetting = ({ form }: Props) => {
  const values = form.getFieldsValue(true);

  const restType = values["restType"];
  const method = values["httpMethod"];

  console.log(values);
  return (
    <div>
      <ul className="text-blue-500 flex flex-row gap-5 [&>li]:border [&>li]:p-2 [&>li]:rounded-xl mb-2">
        {restType && (
          <li>
            <strong>نوع ارتباط : </strong>
            {restType === RestType.DATABASEDIRECT ? "اتصال به دیتابیس" : "فراخوانی وب سرویس خارجی"}
          </li>
        )}

        {method && (
          <li>
            <strong>متد ارتباط : </strong>
            {method}
          </li>
        )}
      </ul>

      {restType &&
        (restType === RestType.DATABASEDIRECT ? (
          <ServiceDbSetting form={form} />
        ) : (
          <ServiceExternalApiSetting form={form} />
        ))}
    </div>
  );
};

export default ServiceDbOrApiSetting;
