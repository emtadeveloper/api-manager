"use client";
import {
  CheckOutlined,
  PlusCircleOutlined,
  SecurityScanFilled,
} from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Modal,
  FormInstance,
  message,
  Select,
  Radio,
} from "antd";
import { useState } from "react";
import { ApiTest, AuthTest } from "@/app/actions/rest-services/rest-actions";
import ServiceParamAdd from "@/app/service-param/components/auth-service-param-add";
import RestExternalApiParam from "../components/rest-external-api-param";
import { Option } from "antd/es/mentions";
import { AuthType } from "@/utils/auth-type.enum";

interface Props {
  form: FormInstance;
}
const ServiceExternalApiSetting = ({ form }: Props) => {
  const [authTestLoadin, setAuthTestLoading] = useState<boolean>(false);
  const [apiTestLoading, setApiTestLoading] = useState<boolean>(false);
  const [externalApiParamOpen, setExternalApiParamOpen] =
    useState<boolean>(false);
  const [urlCallOpen, setUrlCallOpen] = useState<boolean>(false);
  const [hasAuth, setHasAuth] = useState<boolean>(
    form.getFieldValue(["restExternalApiSetting", "hasAuth"]),
  );
  const [apiResult, setApiResult] = useState<string>("");
  const handleApiTest = async () => {
    setApiTestLoading(true);
    const result = await ApiTest(
      form.getFieldValue("restExternalApiSetting"),
      form.getFieldValue("latinName"),
    );

    if (!result.success) message.error(result.error);
    else {
      setApiResult(await result.data);
    }
    setUrlCallOpen(true);
    setApiTestLoading(false);
  };
  const [authResult, setAuthResult] = useState<string>()
  const handleAuthTest = async () => {
    setAuthTestLoading(true);
    const result = await AuthTest(form.getFieldValue("restAuthServiceSetting"));
    if (!result.success) message.error(result.error);
    else {
      message.success("تست احراز هویت با موفقیت انجام شد");
      setAuthResult( result.data);
      // setApiResult(result.data)
      setAuthResultOpen(true)
    }
    setAuthTestLoading(false);
  };
  const [authParamLoading, setAuthParamLoading] = useState<boolean>(false);
  const [authParamOpen, setAuthParamOpen] = useState<boolean>(false);
  const handleAddAuthParam = async () => {
    setAuthParamLoading(true);
    setAuthParamOpen(true);
    setAuthParamLoading(false);
  };
  const[authResultOpen, setAuthResultOpen] = useState<boolean>(false)
  return (
    <div className="flex flex-wrap bg-gray-50 p-5! rounded-2xl border ">
    
      <Modal height="50%"  className="overflow-auto"   title="نتیجه احراز هویت" footer={false} open={authResultOpen} onCancel={() => setAuthResultOpen(false)}>
          {JSON.stringify(authResult)}
      </Modal>
      <Form.Item
        name={["restExternalApiSetting", "baseUrl"]}
        label="آدرس پایه وب سرویس"
        className="w-full pl-2! "
      >
        <Input type="text" placeholder="آدرس پایه" />
      </Form.Item>
      <Form.Item
        label="نیاز به احراز هویت"
        name={["restExternalApiSetting", "hasAuth"]}
        className="min-w-1/3 pl-2!"
        initialValue={false}
      >
        <Select
          allowClear
          showSearch
          placeholder="انتخاب نمایید..."
          onSelect={(value, option) => {
            setHasAuth(option.value);
          }}
          options={[
            {
              value: false,
              label: "ندارد",
            },
            {
              value: true,
              label: "دارد",
            },
          ]}
        />
      </Form.Item>

      <Button
        icon={<PlusCircleOutlined />}
        className=""
        onClick={() => setExternalApiParamOpen(true)}
      >
        پارامترهای وب سرویس
      </Button>
      <Modal
        title=" پارامترهای وب سرویس"
        destroyOnHidden
        footer={false}
        width="90%"
        open={externalApiParamOpen}
        onCancel={() => setExternalApiParamOpen(false)}
      >
        <RestExternalApiParam />
      </Modal>
      <Button
        onClick={() => handleApiTest()}
        icon={<CheckOutlined />}
        className=""
        loading={apiTestLoading}
      >
        تست وب سرویس
      </Button>
      <Modal
        open={urlCallOpen}
        onCancel={() => setUrlCallOpen(false)}
        footer={null}
        width={1000}
        title="تست وب سرویس"
      >
        <div className="max-h-50 overflow-auto text-left">
          {JSON.stringify(apiResult)}
        </div>
      </Modal>
      <div
        className={`flex flex-wrap bg-gray-50 p-3! w-full rounded-2xl border ${!hasAuth ? "hidden" : ""}`}
      >
        <Form.Item
          name={["restAuthServiceSetting", "authServiceUrl"]}
          label="سرویس احراز هویت"
          className="min-w-12/12 pl-2!"
        >
          <Input type="text" placeholder="آدرس کامل سرویس احراز هویت" />
        </Form.Item>
        {/* <Form.Item
          label="نام کاربری"
          name={["restExternalApiSetting", "authUsername"]}
          className="min-w-1/3 pl-2!"
        >
          <Input placeholder="نام کاربری" />
        </Form.Item>
        <Form.Item
          label="رمز عبور"
          name={["restExternalApiSetting", "authPassword"]}
          className="min-w-1/3 pl-2!"
        >
          <Input type="password" placeholder="رمز عبور" />
        </Form.Item>
        <div className="w-full " />
        <Form.Item
          label="پارامتر نام کاربری"
          name={["restExternalApiSetting", "authUsernameParam"]}
          className="min-w-1/3 pl-2!"
        >
          <Input placeholder="username" />
        </Form.Item>*/}
        <Form.Item
          label="متد اعتبارسنجی"
          name={["restAuthServiceSetting", "authMethod"]}
          className="min-w-1/3 pl-2!"
        >
          <Radio.Group>
            <Radio value={AuthType.JWT}>JWT</Radio>
            <Radio value={AuthType.API_KEY}>API_KEY</Radio>
          </Radio.Group>
        </Form.Item>

        <div className="mr-auto">
          <Button
            loading={authTestLoadin}
            onClick={() => handleAddAuthParam()}
            icon={<SecurityScanFilled />}
          >
            پارامترهای سرویس احراز هویت
          </Button>
          <Modal
            title=" پارامترهای احراز هویت"
            destroyOnHidden
            footer={false}
            width="90%"
            open={authParamOpen}
            onCancel={() => setAuthParamOpen(false)}
          >
            <ServiceParamAdd />
          </Modal>

          <Button
            loading={authTestLoadin}
            onClick={() => handleAuthTest()}
            icon={<SecurityScanFilled />}
          >
            تست احراز هویت
          </Button>
        </div>
      </div>

      {/* <Button
        icon={<PlusCircleOutlined />}
        className="mt-2"
        onClick={() => setUrlPathParamOpen(true)}
      >
        پارامترهای UrlPath
      </Button> */}
      {/* <Modal
        open={urlPathParamOpen}
        onCancel={() => setUrlPathParamOpen(false)}
        footer={null}
        width={1000}
        title="پارامترهای UrlPath"
      >
        {" "}
        <RestParameters />
      </Modal> */}
    </div>
  );
};

export default ServiceExternalApiSetting;
