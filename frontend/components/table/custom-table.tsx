"use client";

import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import DataTable, { DataTableColumn } from "@/components/table/DataTable";

export interface RestServiceTableRow {
  id: number;
  persianName: string | null;
  latinName: string | null;
  httpMethod: string | null;
  restType: string | null;
}

type Props = {
  data: RestServiceTableRow[];
  onEdit: (id: number) => void;
  onDelete: (row: RestServiceTableRow) => void;
};

const columns: DataTableColumn<RestServiceTableRow>[] = [
  { title: "نام فارسی", dataIndex: "persianName" },
  { title: "نام لاتین", dataIndex: "latinName" },
];

export default function CustomTable({ onEdit, onDelete, data }: Props) {
  const actionColumn: DataTableColumn<RestServiceTableRow> = {
    title: "عملیات",
    dataIndex: "id",
    searchable: false,
    width: 90,
    render: (_value, record) => (
      <Dropdown
        trigger={["click"]}
        menu={{
          items: [
            { key: "edit", icon: <EditOutlined />, label: "ویرایش" },
            { key: "delete", danger: true, icon: <DeleteOutlined />, label: "حذف" },
          ],
          onClick: ({ key }) => (key === "edit" ? onEdit(record.id) : onDelete(record)),
        }}
      >
        <Button type="text" aria-label={`عملیات ${record.latinName ?? record.id}`} icon={<MoreOutlined />} />
      </Dropdown>
    ),
  };

  return <DataTable data={data} columns={[...columns, actionColumn]} rowKey="id" emptyText="سرویسی ثبت نشده است" />;
}
