"use client";

import { Empty, Input, Table } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import { useMemo, useState } from "react";

export interface DataTableColumn<T> {
  title: string;
  dataIndex: keyof T;
  searchable?: boolean;
}

interface DataTableProps<T extends Record<string, unknown>> {
  data: T[];
  rowKey?: keyof T;
  /** اگر ندهید، ستون‌ها به‌طور خودکار از کلیدهای اولین رکورد ساخته می‌شوند */
  columns?: DataTableColumn<T>[];
  selectable?: boolean;
  onSelectRow?: (key: string) => void;
  pageSize?: number;
  emptyText?: string;
}

/**
 * جدول عمومی پروژه با قابلیت جستجوی ستونی و انتخاب یک ردیف (radio).
 * جایگزین تکرار کامل منطق جدول در چند فایل مختلف پروژه.
 */
export default function DataTable<T extends Record<string, unknown>>({
  data,
  rowKey = "id" as keyof T,
  columns,
  selectable = false,
  onSelectRow,
  pageSize: initialPageSize = 5,
  emptyText = "داده‌ای برای نمایش وجود ندارد",
}: DataTableProps<T>) {
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const resolvedColumns = useMemo<DataTableColumn<T>[]>(() => {
    if (columns) return columns;
    if (data.length === 0) return [];
    return Object.keys(data[0]).map((key) => ({
      title: key,
      dataIndex: key as keyof T,
      searchable: true,
    }));
  }, [columns, data]);

  const getColumnSearchProps = (dataIndex: keyof T) => ({
    filterDropdown: ({ selectedKeys, setSelectedKeys, confirm }: FilterDropdownProps) => (
      <div className="p-2">
        <Input
          allowClear
          value={selectedKeys[0] as string}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => confirm()}
          placeholder={`جستجوی ${String(dataIndex)}`}
        />
      </div>
    ),
    onFilter: (value: React.Key | boolean, record: T) =>
      String(record[dataIndex]).toLowerCase().includes(String(value).toLowerCase()),
  });

  if (data.length === 0) {
    return <Empty description={emptyText} />;
  }

  const tableColumns = [
    {
      title: "ردیف",
      key: "__index",
      render: (_: unknown, __: T, index: number) => index + 1,
    },
    ...resolvedColumns.map((col) => ({
      title: col.title,
      dataIndex: col.dataIndex as string,
      key: col.dataIndex as string,
      ...(col.searchable ? getColumnSearchProps(col.dataIndex) : {}),
    })),
  ];

  return (
    <Table<T>
      className="mt-2"
      rowKey={rowKey as string}
      columns={tableColumns}
      dataSource={data}
      pagination={{
        pageSize,
        onShowSizeChange: (_, size) => setPageSize(size),
        showTotal: (total) => `${total} رکورد`,
      }}
      rowSelection={
        selectable
          ? {
              type: "radio" as const,
              selectedRowKeys,
              onChange: (keys) => {
                setSelectedRowKeys(keys);
                onSelectRow?.(keys[0]?.toString() ?? "");
              },
            }
          : undefined
      }
    />
  );
}
