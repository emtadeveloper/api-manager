import { useState } from "react";
import { Input, Select, Space } from "antd";
import type { ResolvedTableColumn, TableFilterState } from "../types";

interface TableFilterProps<T extends object> {
  columns: ResolvedTableColumn<T>[];
  values: TableFilterState;
  onChange: (columnId: string, value: string) => void;
  placeholder?: string;
}

export default function TableFilter<T extends object>({
  columns,
  values,
  onChange,
  placeholder = "جست‌وجو",
}: TableFilterProps<T>) {
  const searchableColumns = columns.filter(
    (column) => column.searchable !== false && !column.isAction,
  );
  const [activeColumnId, setActiveColumnId] = useState(
    searchableColumns[0]?.id ?? "",
  );
  const activeColumn =
    searchableColumns.find((column) => column.id === activeColumnId) ??
    searchableColumns[0];
  const activeValue = activeColumn ? (values[activeColumn.id] ?? "") : "";

  if (!activeColumn) return null;

  const handleColumnChange = (nextColumn: string) => {
    setActiveColumnId(nextColumn);
    onChange(nextColumn, values[nextColumn] ?? "");
  };

  return (
    <Space.Compact block className="min-w-0 flex-1">
      <Select
        value={activeColumn.id}
        options={searchableColumns.map((column) => ({
          value: column.id,
          label: column.title,
        }))}
        onChange={handleColumnChange}
        aria-label="ستون جست‌وجو"
        style={{ minWidth: 120 }}
      />
      <Input
        value={activeValue}
        onChange={(event) => onChange(activeColumn.id, event.target.value)}
        placeholder={placeholder}
        allowClear
        aria-label={placeholder}
      />
    </Space.Compact>
  );
}
