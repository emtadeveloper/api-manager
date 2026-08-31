"use client";

import DataTable, { DataTableColumn } from "@/components/ui/DataTable";
import { useMemo } from "react";

type Props = {
  data: Record<string, unknown>[];
  handleSelectedKey: (value: string) => void;
};

export default function RestDatabaseCallDetails({ handleSelectedKey, data }: Props) {
  const columns: DataTableColumn<Record<string, unknown>>[] = useMemo(() => {
    if (!data || data.length === 0) return [];
    return Object.keys(data[0]).map((key) => ({ title: key, dataIndex: key }));
  }, [data]);

  return (
    <DataTable
      data={data}
      columns={columns}
      rowKey="id"
      onSelectRow={handleSelectedKey}
      emptyText="داده‌ای برای نمایش وجود ندارد"
    />
  );
}
