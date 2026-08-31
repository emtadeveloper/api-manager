"use client";

import { createRestService, findRestServiceById } from "@/app/actions/rest-services/rest-serveice.action";
import { RestServicesCreateDto } from "@/app/dto/rest-services-create-dto";
import type { RestServicesCreateDto as RestServicesCreateDtoType } from "@/app/dto/rest-services-create-dto";
import SesrviceDefinition from "@/app/rest-services/rest-service-steps/service-definition";
import ServiceDbOrApiSetting from "@/app/rest-services/rest-service-steps/service-db-or-api-setting";
import ServiceFinalize from "@/app/rest-services/rest-service-steps/service-finalize";
import { yekan } from "../public/fonts/font";
import { CheckCircleFilled, FastBackwardOutlined, FastForwardFilled } from "@ant-design/icons";
import { Button, Steps } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, FieldPath } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAlert from "@/hooks/useAlert";
import { extractErrorMessage } from "@/utils/extract-error-message";
import { AuthType } from "@/enums/auth-type.enum";

const STORAGE_KEY = "rest-service-form";

const DEFAULT_VALUES: Partial<RestServicesCreateDtoType> = {
  httpMethod: "GET",
  restType: "DATABASEDIRECT",
  restDatabaseSetting: {
    dbType: "POSTGRES",
    dbServer: "",
    dbPort: "",
    dbUsername: "",
    dbPassword: "",
    dbName: "",
    dbViewName: "",
  },
  restExternalApiSetting: {
    baseUrl: "",
    hasAuth: false,
    restExternalApiParam: [],
  },
  restAuthServiceSetting: {
    authServiceUrl: "",
    authMethod: AuthType.JWT,
    restAuthServiceParam: [],
  },
};

const ServiceIntializeStep = () => {
  const param = useParams();
  const router = useRouter();
  const alert = useAlert();
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);

  const methods = useForm<RestServicesCreateDtoType>({
    resolver: zodResolver(RestServicesCreateDto),
    mode: "onBlur",
    defaultValues: DEFAULT_VALUES,
  });

  const { handleSubmit, reset, watch, setError } = methods;

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    let cancelled = false;

    const findRest = async (id: string) => {
      const result = await findRestServiceById(parseInt(id));
      if (!result.success && !cancelled) {
        alert.error(extractErrorMessage(result));
        return;
      }
      if (result.data && !cancelled) {
        reset({ ...DEFAULT_VALUES, ...result.data } as RestServicesCreateDtoType);
      }
    };

    if (saved) {
      try {
        reset(JSON.parse(saved) as RestServicesCreateDtoType);
      } catch {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    }

    if (param.id) void findRest(param.id.toString());

    return () => {
      cancelled = true;
    };
  }, [alert, param.id, reset]);

  useEffect(() => {
    const subscription = watch((values) => {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const next = () => setCurrent((c) => c + 1);
  const prev = () => setCurrent((c) => (c >= 1 ? c - 1 : c));

  const onSubmit = async (values: RestServicesCreateDtoType) => {
    setLoading(true);
    try {
      const result = await createRestService(Number(param.id) || 0, values);
      if (!result.success) {
        result.errors?.forEach((issue) => {
          setError(issue.path.join(".") as FieldPath<RestServicesCreateDtoType>, {
            message: issue.message,
          });
        });
        alert.error("خطا در ثبت اطلاعات");
        return;
      }
      alert.success("با موفقیت ثبت شد");
      sessionStorage.removeItem(STORAGE_KEY);
      router.push("/rest-services");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Steps
          className={`step ${yekan.className}`}
          current={current}
          onChange={(step) => setCurrent(step)}
          items={[{ title: "تعاریف اولیه" }, { title: "تنظیمات اتصال" }, { title: "تایید نهایی" }]}
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
            <Button loading={loading} htmlType="submit" title="تایید نهایی" type="primary">
              <CheckCircleFilled />
            </Button>
          )}
        </div>

        {current === 0 && <SesrviceDefinition />}
        {current === 1 && <ServiceDbOrApiSetting />}
        {current === 2 && <ServiceFinalize />}
      </form>
    </FormProvider>
  );
};

export default ServiceIntializeStep;
