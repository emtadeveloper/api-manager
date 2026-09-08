"use client";

import { Empty, Input, Table } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import type { ReactNode } from "react";
import { useState } from "react";
import { filterBySearchLabel } from "@/utils/filter-by-search-label";

export interface DataTableColumn<T> {
  title: string;
  dataIndex: keyof T;
  searchable?: boolean;
  width?: number | string;
  render?: (value: T[keyof T], record: T, index: number) => ReactNode;
}

interface DataTableProps<T extends object> {
  data: T[];
  columns: DataTableColumn<T>[];
  rowKey: keyof T;
  onSelectRow?: (key: string) => void;
  emptyText?: string;
  pageSize?: number;
}

export default function DataTable<T extends object>({
  data,
  columns,
  rowKey,
  onSelectRow,
  emptyText = "داده‌ای برای نمایش وجود ندارد",
  pageSize: initialPageSize = 5,
}: DataTableProps<T>) {
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  if (!data || data.length === 0) {
    return (
      <div className="app-empty-block">
        <Empty description={emptyText} />
      </div>
    );
  }

  const getColumnSearchProps = (dataIndex: keyof T) => ({
    filterDropdown: ({ selectedKeys, setSelectedKeys, confirm }: FilterDropdownProps) => (
      <div className="p-2">
        <Input
          allowClear
          value={selectedKeys[0] as string}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => confirm()}
          placeholder={`جستجو ${String(dataIndex)}`}
        />
      </div>
    ),
    onFilter: (value: React.Key | boolean, record: T) => filterBySearchLabel(String(value), record, dataIndex),
  });

  const antColumns = columns.map((col) => ({
    title: col.title,
    dataIndex: col.dataIndex as string,
    key: col.dataIndex as string,
    width: col.width,
    render: col.render,
    ...(col.searchable !== false ? getColumnSearchProps(col.dataIndex) : {}),
  }));

  const rowSelection = onSelectRow
    ? {
        type: "radio" as const,
        selectedRowKeys,
        onChange: (newSelectedRowKeys: React.Key[]) => {
          setSelectedRowKeys(newSelectedRowKeys);
          onSelectRow(newSelectedRowKeys[0]?.toString() ?? "");
        },
      }
    : undefined;

  return (
    <Table<T>
      rowKey={rowKey as string}
      columns={[
        { title: "ردیف", key: "index", render: (_: unknown, _r: T, index: number) => index + 1 },
        ...antColumns,
      ]}
      dataSource={data}
      onChange={(pagination) => setPageSize(pagination.pageSize ?? initialPageSize)}
      pagination={{ pageSize, showTotal: (total) => `${total} رکورد` }}
      rowSelection={rowSelection}
    />
  );
}
