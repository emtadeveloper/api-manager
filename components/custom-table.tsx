"use client";

import { RestService } from "@/generated/sqlite";
import DataTable, { DataTableColumn } from "@/components/ui/DataTable";

type Props = {
  data: RestService[];
  handleSelectedKey: (value: string) => void;
};

const columns: DataTableColumn<RestService>[] = [
  { title: "نام فارسی", dataIndex: "persianName" },
  { title: "نام لاتین", dataIndex: "latinName" },
];

export default function CustomTable({ handleSelectedKey, data }: Props) {
  return (
    <DataTable
      data={data}
      columns={columns}
      rowKey="id"
      onSelectRow={handleSelectedKey}
      emptyText="سرویسی ثبت نشده است"
    />
  );
}
