"use client";

import CustomTable from "@/components/table/custom-table";
import useNotificationStore from "@/stores/notification";
import { extractErrorMessage } from "@/utils/extract-error-message";
import { PlusCircleFilled } from "@ant-design/icons";
import { App, Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllRestServices, removeService } from "@/apis/backend";

export type RestService = {
  id: number;
  persianName: string | null;
  latinName: string | null;
  httpMethod: string | null;
  restType: string | null;
};

export default function RestServices() {
  const { setText, setError } = useNotificationStore();
  const { modal } = App.useApp();
  const router = useRouter();
  const [restServices, setRestServices] = useState<RestService[]>([]);

  useEffect(() => {
    let cancelled = false;
    const getServices = async () => {
      const result = await getAllRestServices();
      if (result.success && !cancelled) setRestServices(result.data as RestService[]);
      else if (!result.success && !cancelled) setError(extractErrorMessage(result));
    };
    sessionStorage.removeItem("rest-service-form");
    void getServices();
    return () => {
      cancelled = true;
    };
  }, [setError]);

  const handleDelete = async (service: RestService) => {
    const result = await removeService(service.id);
    if (!result.success) {
      setError(extractErrorMessage(result, "خطا در حذف"));
      return;
    }
    setText("با موفقیت حذف شد");
    setRestServices((prev) => prev.filter((item) => item.id !== service.id));
  };

  return (
    <>
      <section>
        <Link href="/rest-services/add">
          <Button type="primary" icon={<PlusCircleFilled />} className="my-4">
            افزودن
          </Button>
        </Link>
        <CustomTable
          data={restServices}
          onEdit={(id) => router.push(`/rest-services/${id}/edit`)}
          onDelete={(service) =>
            modal.confirm({
              title: "تأیید حذف",
              content: `آیا از حذف سرویس ${service.persianName ?? service.latinName ?? ""} مطمئنید؟`,
              okText: "حذف",
              cancelText: "انصراف",
              okButtonProps: { danger: true },
              onOk: () => handleDelete(service),
            })
          }
        />
      </section>
    </>
  );
}
