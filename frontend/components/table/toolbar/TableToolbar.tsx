import type { ReactNode } from "react";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import ColumnManager from "./ColumnManager";
import TableFilter from "./TableFilter";
import type { ResolvedTableColumn, TableFilterState } from "../types";

interface TableToolbarProps<T extends object> {
  title?: ReactNode;
  columns: ResolvedTableColumn<T>[];
  visibleColumnIds: string[];
  filterValues: TableFilterState;
  onFilterChange: (columnId: string, value: string) => void;
  onVisibleColumnsChange: (columnIds: string[]) => void;
  onAddNew?: () => void | Promise<void>;
  addLabel: string;
  onRefresh?: () => void | Promise<void>;
  toolbarActions?: ReactNode;
  searchPlaceholder: string;
  totalItems: number;
}

export default function TableToolbar<T extends object>({
  title,
  columns,
  visibleColumnIds,
  filterValues,
  onFilterChange,
  onVisibleColumnsChange,
  onAddNew,
  addLabel,
  onRefresh,
  toolbarActions,
  searchPlaceholder,
  totalItems,
}: TableToolbarProps<T>) {
  return (
    <div className="flex flex-col gap-3 border-b border-[var(--app-border)] p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-3">
        {title ? (
          <Typography.Text strong className="shrink-0">
            {title}
          </Typography.Text>
        ) : null}
        <TableFilter
          columns={columns}
          values={filterValues}
          onChange={onFilterChange}
          placeholder={searchPlaceholder}
        />
      </div>
      <Space wrap size="small" className="shrink-0">
        <ColumnManager
          columns={columns}
          visibleColumnIds={visibleColumnIds}
          onChange={onVisibleColumnsChange}
        />
        {onRefresh ? (
          <Button
            type="text"
            icon={<ReloadOutlined />}
            onClick={() => void onRefresh()}
          >
            تازه‌سازی
          </Button>
        ) : null}
        {onAddNew ? (
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => void onAddNew()}
          >
            {addLabel}
          </Button>
        ) : null}
        {toolbarActions}
        <Typography.Text type="secondary" className="hidden md:inline-flex">
          | تعداد کل: {totalItems}
        </Typography.Text>
      </Space>
    </div>
  );
}
