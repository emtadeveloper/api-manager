"use client";
import CustomTable from "@/components/custom-table";
import ConfirmActionButton from "@/components/ui/ConfirmActionButton";
import PageActionsBar from "@/components/ui/PageActionsBar";
import useAlert from "@/hooks/useAlert";
import { extractErrorMessage } from "@/utils/extract-error-message";
import { EditFilled, PlusCircleFilled } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
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
  const alert = useAlert();
  const [selectedRowKey, setSelectedRowKey] = useState<string | null>(null);
  const [restServices, setRestServices] = useState<RestService[]>([]);

  useEffect(() => {
    let cancelled = false;

    const getServices = async () => {
      const result = await getAllRestServices();
      if (result.success && !cancelled) {
        setRestServices(result.data as RestService[]);
      } else if (!result.success && !cancelled) {
        alert.error(extractErrorMessage(result));
      }
    };

    sessionStorage.removeItem("rest-service-form");
    void getServices();

    return () => {
      cancelled = true;
    };
  }, [alert]);

  const handleDelete = async () => {
    const selectedServiceId = selectedRowKey ? Number(selectedRowKey) : null;
    if (selectedServiceId === null || !Number.isInteger(selectedServiceId)) return;

    const result = await removeService(selectedServiceId);
    if (!result.success) {
      alert.error(extractErrorMessage(result, "خطا در حذف"));
      return;
    }

    alert.success("با موفقیت حذف شد");
    setRestServices((prev) => prev.filter((service) => service.id !== selectedServiceId));
    setSelectedRowKey(null);
  };

  const hasSelection = Boolean(selectedRowKey);

  return (
    <section>
      <PageActionsBar>
        <Link href="/rest-services/add">
          <Button type="primary" icon={<PlusCircleFilled />}>
            افزودن
          </Button>
        </Link>

        <Link href={hasSelection ? `/rest-services/${selectedRowKey}/edit` : "#"} aria-disabled={!hasSelection}>
          <Button icon={<EditFilled />} disabled={!hasSelection}>
            ویرایش
          </Button>
        </Link>

        <ConfirmActionButton disabled={!hasSelection} onConfirm={handleDelete}>
          حذف
        </ConfirmActionButton>
      </PageActionsBar>

      <CustomTable data={restServices} handleSelectedKey={(value) => setSelectedRowKey(value)} />
    </section>
  );
}
