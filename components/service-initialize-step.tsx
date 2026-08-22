"use client";

import {
  createRestService,
  findRestServiceById,
} from "@/app/actions/rest-services/rest-serveice.action";
import { RestServicesCreateDto } from "@/app/dto/rest-services-create-dto";
import SesrviceDefinition from "@/app/rest-services/rest-service-steps/service-definition";
import ServiceDbOrApiSetting from "@/app/rest-services/rest-service-steps/service-db-or-api-setting";
import ServiceFinalize from "@/app/rest-services/rest-service-steps/service-finalize";
import { yekan } from "../public/fonts/font";
import { getChangedFieldPaths } from "@/utils/get-changed-field-paths";
import {
  CheckCircleFilled,
  FastBackwardOutlined,
  FastForwardFilled,
} from "@ant-design/icons";
import { Button, Form, message, Steps } from "antd";
import { useForm } from "antd/es/form/Form";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ServiceIntializeStep = () => {
  const param = useParams();
  const [current, setCurrent] = useState<number>(0);
  const router = useRouter();

  const handleSubmit = async () => {
    const values = form.getFieldsValue(true);
    console.log(values);

    const result = await createRestService(Number(param.id), values);
    if (!result.success) {
      const antErrors = result?.errors?.map((issue) => ({
        name: issue.path,
        errors: [issue.message],
      }));
      message.error("خطا در ثبت");
      form.setFields(antErrors!);
      return;
    }
    message.success("با موفقیت ثبت شد");
    router.push("/rest-services");
  };
  const next = async () => {
    setCurrent((c) => c + 1);
  };
  const prev = () => setCurrent((c) => (c >= 1 ? c - 1 : c));
  const [form] = useForm();
  const [restService, setRestService] = useState<RestServicesCreateDto>();
  useEffect(() => {
    const saved = sessionStorage.getItem("rest-service-form");
    const findRest = async (id: string) => {
      const result = await findRestServiceById(parseInt(id));
      console.log("result", result);
      if (!result.success) {
        message.error(result.error);
        return;
      }

      setRestService(result.data as RestServicesCreateDto);
      form.setFieldsValue(result.data as RestServicesCreateDto);
    };
    if (saved) {
      form.setFieldsValue(JSON.parse(saved));
    }
    findRest(param.id?.toString() ?? "0");
  }, [form]);

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      preserve={true}
      onValuesChange={(changedValues) => {
        const values = form.getFieldsValue(true);
        sessionStorage.setItem("rest-service-form", JSON.stringify(values));
        const paths = getChangedFieldPaths(changedValues);
        form.setFields(paths.map((name) => ({ name, errors: [] })));
      }}
    >
      <Steps
        className={`step ${yekan.className}`}
        current={current}
        onChange={(step) => setCurrent(step)}
        items={[
          { title: "تعاریف اولیه" },
          // { title: "تنظیمات احراز هویت" },
          { title: "تنظیمات اتصال" },
          { title: "تایید نهایی" },
        ]}
      />
      <div className="my-2">
        {current > 0 && (
          <Button title="قبلی" onClick={prev}>
            <FastForwardFilled />
          </Button>
        )}
        {current <= 1 && (
          <Button title="بعدی" onClick={next}>
            <FastBackwardOutlined />
          </Button>
        )}

        {current > 1 && (
          <Button htmlType="submit" title="تایید نهایی">
            <CheckCircleFilled />
          </Button>
        )}
      </div>

      {current === 0 && <SesrviceDefinition />}
      {/* {current === 1 && <ServiceAuthSetting form={form} />} */}
      {current === 1 && <ServiceDbOrApiSetting form={form} />}
      {current === 2 && <ServiceFinalize form={form} />}
    </Form>
  );
};

export default ServiceIntializeStep;
