"use client";
import { CheckOutlined, PlusCircleOutlined, SecurityScanFilled } from "@ant-design/icons";
import { Button, Modal, Radio } from "antd";
import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { ApiTest, AuthTest } from "@/apis/backend";
import ServiceParamAdd from "@/app/service-param/components/auth-service-param-add";
import RestExternalApiParam from "../components/rest-external-api-param";
import { AuthType } from "@/enums/auth-type.enum";
import SectionCard from "@/components/ui/SectionCard";
import RHFInput from "@/components/form/RHFInput";
import RHFRadioGroup from "@/components/form/RHFRadioGroup";
import useAlert from "@/hooks/useAlert";
import { extractErrorMessage } from "@/utils/extract-error-message";

const ServiceExternalApiSetting = () => {
  const { control, getValues } = useFormContext();
  const alert = useAlert();

  const [authTestLoading, setAuthTestLoading] = useState(false);
  const [apiTestLoading, setApiTestLoading] = useState(false);
  const [externalApiParamOpen, setExternalApiParamOpen] = useState(false);
  const [urlCallOpen, setUrlCallOpen] = useState(false);
  const [authParamOpen, setAuthParamOpen] = useState(false);
  const [authResultOpen, setAuthResultOpen] = useState(false);
  const [apiResult, setApiResult] = useState<unknown>(null);
  const [authResult, setAuthResult] = useState<unknown>(null);

  const hasAuth = useWatch({ control, name: "restExternalApiSetting.hasAuth" });

  const handleApiTest = async () => {
    setApiTestLoading(true);
    try {
      const result = await ApiTest(getValues("restExternalApiSetting"), getValues("latinName"));
      if (!result.success) {
        alert.error(extractErrorMessage(result));
        return;
      }
      setApiResult(result.data);
      setUrlCallOpen(true);
    } finally {
      setApiTestLoading(false);
    }
  };

  const handleAuthTest = async () => {
    setAuthTestLoading(true);
    try {
      const result = await AuthTest(getValues("restAuthServiceSetting"));
      if (!result.success) {
        alert.error(extractErrorMessage(result));
        return;
      }
      alert.success("تست احراز هویت با موفقیت انجام شد");
      setAuthResult(result.data);
      setAuthResultOpen(true);
    } finally {
      setAuthTestLoading(false);
    }
  };

  return (
    <SectionCard title="تنظیمات وب سرویس خارجی">
      <RHFInput
        control={control}
        name="restExternalApiSetting.baseUrl"
        label="آدرس پایه وب سرویس"
        required
        full
        dir="ltr"
        placeholder="آدرس پایه"
      />

      <RHFRadioGroup control={control} name="restExternalApiSetting.hasAuth" label="نیاز به احراز هویت">
        <Radio value={false}>ندارد</Radio>
        <Radio value={true}>دارد</Radio>
      </RHFRadioGroup>

      <div className="app-form-item--full">
        <Button htmlType="button" icon={<PlusCircleOutlined />} onClick={() => setExternalApiParamOpen(true)}>
          پارامترهای وب سرویس
        </Button>

        <Button htmlType="button" onClick={handleApiTest} icon={<CheckOutlined />} loading={apiTestLoading} className="mr-2">
          تست وب سرویس
        </Button>
      </div>

      <Modal
        title="پارامترهای وب سرویس"
        destroyOnHidden
        footer={false}
        width="90%"
        open={externalApiParamOpen}
        onCancel={() => setExternalApiParamOpen(false)}
      >
        <RestExternalApiParam />
      </Modal>

      <Modal
        open={urlCallOpen}
        onCancel={() => setUrlCallOpen(false)}
        footer={null}
        width={1000}
        title="نتیجه تست وب سرویس"
      >
        <pre className="max-h-96 overflow-auto text-left whitespace-pre-wrap break-all app-text-muted">
          {JSON.stringify(apiResult, null, 2)}
        </pre>
      </Modal>

      {hasAuth && (
        <SectionCard nested title="تنظیمات احراز هویت" className="app-form-item--full">
          <RHFInput
            control={control}
            name="restAuthServiceSetting.authServiceUrl"
            label="سرویس احراز هویت"
            full
            dir="ltr"
            placeholder="آدرس کامل سرویس احراز هویت"
          />

          <RHFRadioGroup control={control} name="restAuthServiceSetting.authMethod" label="متد اعتبارسنجی">
            <Radio.Button value={AuthType.JWT}>JWT</Radio.Button>
            <Radio.Button value={AuthType.API_KEY}>API_KEY</Radio.Button>
          </RHFRadioGroup>

          <div className="app-form-item--full">
            <Button htmlType="button" onClick={() => setAuthParamOpen(true)} icon={<SecurityScanFilled />}>
              پارامترهای سرویس احراز هویت
            </Button>

            <Button htmlType="button" loading={authTestLoading} onClick={handleAuthTest} icon={<SecurityScanFilled />} className="mr-2">
              تست احراز هویت
            </Button>
          </div>

          <Modal
            title="پارامترهای احراز هویت"
            destroyOnHidden
            footer={false}
            width="90%"
            open={authParamOpen}
            onCancel={() => setAuthParamOpen(false)}
          >
            <ServiceParamAdd />
          </Modal>

          <Modal
            title="نتیجه احراز هویت"
            footer={false}
            open={authResultOpen}
            onCancel={() => setAuthResultOpen(false)}
          >
            <pre className="max-h-96 overflow-auto whitespace-pre-wrap break-all app-text-muted">
              {JSON.stringify(authResult, null, 2)}
            </pre>
          </Modal>
        </SectionCard>
      )}
    </SectionCard>
  );
};

export default ServiceExternalApiSetting;
