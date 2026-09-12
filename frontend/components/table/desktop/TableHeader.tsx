import type { ReactElement } from "react";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import type { ResolvedTableColumn, TableSortDirection } from "../types";

interface TableHeaderProps<T extends object> {
  columns: ResolvedTableColumn<T>[];
  selectionEnabled: boolean;
  selectionMode: "single" | "multiple";
  allVisibleRowsSelected: boolean;
  someVisibleRowsSelected: boolean;
  onToggleAll: (checked: boolean) => void;
  sortKey: keyof T | null;
  sortDirection: TableSortDirection | null;
  onSort: (column: ResolvedTableColumn<T>) => void;
}

function SortIcon({
  direction,
}: {
  direction: TableSortDirection | null;
}): ReactElement {
  if (direction === "asc")
    return <CaretUpOutlined className="text-[var(--app-primary)]" />;
  if (direction === "desc")
    return <CaretDownOutlined className="text-[var(--app-primary)]" />;
  return <MinusOutlined className="opacity-30" />;
}

export default function TableHeader<T extends object>({
  columns,
  selectionEnabled,
  selectionMode,
  allVisibleRowsSelected,
  someVisibleRowsSelected,
  onToggleAll,
  sortKey,
  sortDirection,
  onSort,
}: TableHeaderProps<T>) {
  return (
    <thead>
      <tr className="bg-(--app-surface-light) text-right">
        {selectionEnabled ? (
          <th
            className="w-12 border-b border-[var(--app-border)] px-3 py-3"
            scope="col"
          >
            {selectionMode === "multiple" ? (
              <input
                type="checkbox"
                checked={allVisibleRowsSelected}
                ref={(element) => {
                  if (element)
                    element.indeterminate =
                      someVisibleRowsSelected && !allVisibleRowsSelected;
                }}
                onChange={(event) => onToggleAll(event.target.checked)}
                aria-label="انتخاب همه"
                className="accent-[var(--app-primary)]"
              />
            ) : null}
          </th>
        ) : null}
        {columns.map((column) => {
          const active = sortKey === column.dataIndex;
          return (
            <th
              key={column.id}
              className="border-b border-[var(--app-border)] px-4 py-3 text-xs font-semibold app-text-primary"
              scope="col"
              style={{ width: column.width }}
            >
              {column.sortable ? (
                <button
                  type="button"
                  className="inline-flex items-center gap-2"
                  onClick={() => onSort(column)}
                >
                  {column.title}
                  <SortIcon direction={active ? sortDirection : null} />
                </button>
              ) : (
                column.title
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
