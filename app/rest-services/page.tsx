"use client";
import CustomTable from "@/components/custom-table";
import { DeleteFilled, EditFilled, PlusCircleFilled } from "@ant-design/icons";
import { Button, message, Modal } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getAllRestServices,
  removeService,
} from "../actions/rest-services/rest-serveice.action";
export type RestService = {
  id: number;
  persianName: string | null;
  latinName: string | null;
  httpMethod: string | null;
  restType: string | null;
};

export default function RestServices() {
  const [selectedRowKey, setSelectedRowKey] = useState<string>("0");
  const [resetServices, setRestServices] = useState<RestService[]>([]);
  useEffect(() => {
    const getServices = async () => {
      const result = await getAllRestServices();
      if (result.success) {
        setRestServices(result.data as RestService[]);
      } else {
        console.error(result.errors);
      }
    };

    sessionStorage.removeItem("rest-service-form");
    getServices();
  }, []);

  const handleDelete = async (id: string) => {
    Modal.confirm({
      title: "آیا مطمئن هستید؟",
      content: "این عملیات قابل بازگشت نیست.",
      okText: "بله",
      cancelText: "خیر",
      onOk: async () => {
        const result = await removeService(parseInt(id));
        if (!result.success) {
          message.error("خطا در حذف" + result.errors);
          return;
        }

        message.success("با موفقیت حذف شد");
        setRestServices((prev) => prev.filter((p) => p.id !== parseInt(id)));
      },
      onCancel: () => {
        // runs if user clicks "خیر" (No) — optional, often left empty
      },
    });
  };
  return (
    <section>
      <div className="sticky top-0 mb-0.5 z-5 [&>button]:mr-0.5">
        <Link href="/rest-services/add">
          <Button icon={<PlusCircleFilled />}>افزودن</Button>
        </Link>
        <Link
          onClick={(e) => selectedRowKey ?? e.preventDefault()}
          href={`/rest-services/${selectedRowKey}/edit`}
        >
          <Button icon={<EditFilled />}>ویر ایش</Button>
        </Link>
        <Button
          onClick={async () => handleDelete(selectedRowKey)}
          icon={<DeleteFilled />}
        >
          حذف
        </Button>
      </div>
      <CustomTable
        data={resetServices}
        handleSelectedKey={(value: string) => setSelectedRowKey(value)}
      />
    </section>
  );
}
