"use client";

import GenericTable from "./GenericTable";
import type { GenericTableProps, TableColumn } from "./types";

export type DataTableColumn<T extends object> = TableColumn<T>;
export type DataTableProps<T extends object> = GenericTableProps<T>;

export default function DataTable<T extends object>(props: DataTableProps<T>) {
  return <GenericTable {...props} />;
}
