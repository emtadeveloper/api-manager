"use client";
import { PARAMTYPE } from "@/enums/param-type.enum";
import { DeleteFilled, PlusCircleFilled } from "@ant-design/icons";
import { Button, Empty, Radio, Space } from "antd";
import { useFieldArray, useFormContext } from "react-hook-form";
import SectionCard from "@/components/ui/SectionCard";
import RHFInput from "@/components/form/RHFInput";
import RHFRadioGroup from "@/components/form/RHFRadioGroup";

const RestExternalApiParam = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "restExternalApiSetting.restExternalApiParam",
  });

  return (
    <SectionCard nested title="پارامترهای وب سرویس خارجی">
      <div className="w-full">
        <Button
          icon={<PlusCircleFilled />}
          onClick={() => append({ paramName: "", paramValue: "", paramType: PARAMTYPE.QUERY })}
          className="mb-3"
        >
          ایجاد پارامتر
        </Button>

        {fields.length === 0 ? (
          <Empty description="پارامتری تعریف نشده است" />
        ) : (
          <Space direction="vertical" size={12} className="w-full">
            {fields.map((field, index) => (
              <SectionCard key={field.id} nested>
                <div className="w-full flex justify-end">
                  <Button
                    danger
                    type="text"
                    icon={<DeleteFilled />}
                    onClick={() => remove(index)}
                    aria-label="حذف پارامتر"
                  />
                </div>

                <RHFInput
                  control={control}
                  name={`restExternalApiSetting.restExternalApiParam.${index}.paramName`}
                  placeholder="نام پارامتر"
                />
                <RHFInput
                  control={control}
                  name={`restExternalApiSetting.restExternalApiParam.${index}.paramValue`}
                  placeholder="مقدار پارامتر"
                />
                <RHFRadioGroup
                  control={control}
                  name={`restExternalApiSetting.restExternalApiParam.${index}.paramType`}
                  full
                >
                  <Radio value={PARAMTYPE.HEADER}>HEADER</Radio>
                  <Radio value={PARAMTYPE.BODY}>BODY</Radio>
                  <Radio value={PARAMTYPE.PATH}>PATH</Radio>
                  <Radio value={PARAMTYPE.QUERY}>QUERY</Radio>
                </RHFRadioGroup>
              </SectionCard>
            ))}
          </Space>
        )}
      </div>
    </SectionCard>
  );
};

export default RestExternalApiParam;
