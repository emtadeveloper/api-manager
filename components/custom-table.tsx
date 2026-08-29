"use client";

import { RestService } from "@/generated/sqlite";
import DataTable, { DataTableColumn } from "@/components/ui/DataTable";

type Props = {
  data: RestService[];
  handleSelectedKey: (value: string) => void;
};

const columns: DataTableColumn<RestService>[] = [
  { title: "نام فارسی", dataIndex: "persianName", searchable: true },
  { title: "نام لاتین", dataIndex: "latinName", searchable: true },
];

export default function CustomTable({ handleSelectedKey, data }: Props) {
  return (
    <DataTable<RestService>
      data={data}
      columns={columns}
      selectable
      onSelectRow={handleSelectedKey}
      emptyText="هیچ سرویسی ثبت نشده است"
    />
  );
}
