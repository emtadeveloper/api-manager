"use client";

import DataTable, { DataTableColumn } from "@/components/ui/DataTable";

export interface RestServiceTableRow {
  id: number;
  persianName: string | null;
  latinName: string | null;
  httpMethod: string | null;
  restType: string | null;
}

type Props = {
  data: RestServiceTableRow[];
  handleSelectedKey: (value: string) => void;
};

const columns: DataTableColumn<RestServiceTableRow>[] = [
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
