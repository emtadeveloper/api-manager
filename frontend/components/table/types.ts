import type { ReactNode } from "react";

export type TableKey = string | number;
export type TableSelectionMode = "single" | "multiple";
export type TableSortDirection = "asc" | "desc";

export interface TableSortState<T extends object> {
  key: keyof T | null;
  direction: TableSortDirection | null;
}

export type TableFilterState = Record<string, string>;

export interface TableColumn<T extends object, K extends keyof T = keyof T> {
  id?: string;
  title: string;
  dataIndex: K;
  searchable?: boolean;
  sortable?: boolean;
  width?: number | string;
  mobileVisible?: boolean;
  mobileSummary?: boolean;
  isAction?: boolean;
  isIndex?: boolean;
  render?: (value: T[K], record: T, index: number) => ReactNode;
}

export type ResolvedTableColumn<T extends object> = TableColumn<T> & {
  id: string;
};

export interface TableAction<T extends object> {
  key: string;
  label: string;
  danger?: boolean;
  icon?: ReactNode;
  onClick: (row: T) => void | Promise<void>;
}

export interface GenericTableProps<T extends object> {
  data: T[];
  columns: TableColumn<T>[];
  rowKey: keyof T;
  onSelectRow?: (key: string) => void;
  onSelectionChange?: (keys: string[], rows: T[]) => void;
  selectionMode?: TableSelectionMode;
  emptyText?: string;
  loading?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  title?: ReactNode;
  onAddNew?: () => void | Promise<void>;
  addLabel?: string;
  onRefresh?: () => void | Promise<void>;
  toolbarActions?: ReactNode;
  showToolbar?: boolean;
  searchPlaceholder?: string;
  onVisibleColumnsChange?: (columns: TableColumn<T>[]) => void;
  rowActions?: (row: T) => ReactNode;
}

export function getTableColumnId<T extends object>(
  column: TableColumn<T>,
): string {
  return column.id ?? String(column.dataIndex);
}

export function getTableRowKey<T extends object>(
  row: T,
  rowKey: keyof T,
  index: number,
): string {
  const value = row[rowKey];
  return value === null || value === undefined || value === ""
    ? String(index)
    : String(value);
}
