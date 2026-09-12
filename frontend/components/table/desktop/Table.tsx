import type { ResolvedTableColumn, TableSortDirection } from "../types";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface DesktopTableProps<T extends object> {
  rows: T[];
  rowKey: keyof T;
  columns: ResolvedTableColumn<T>[];
  selectionEnabled: boolean;
  selectionMode: "single" | "multiple";
  selectedRowKeys: string[];
  getRowKey: (row: T, index: number) => string;
  allVisibleRowsSelected: boolean;
  someVisibleRowsSelected: boolean;
  onToggleAll: (checked: boolean) => void;
  onSelectionChange: (row: T, selected: boolean) => void;
  sortKey: keyof T | null;
  sortDirection: TableSortDirection | null;
  onSort: (column: ResolvedTableColumn<T>) => void;
}

export default function DesktopTable<T extends object>({
  rows,
  rowKey,
  columns,
  selectionEnabled,
  selectionMode,
  selectedRowKeys,
  getRowKey,
  allVisibleRowsSelected,
  someVisibleRowsSelected,
  onToggleAll,
  onSelectionChange,
  sortKey,
  sortDirection,
  onSort,
}: DesktopTableProps<T>) {
  return (
    <div className="hidden overflow-x-auto md:block">
      <table className="w-full border-collapse text-right">
        <TableHeader
          columns={columns}
          selectionEnabled={selectionEnabled}
          selectionMode={selectionMode}
          allVisibleRowsSelected={allVisibleRowsSelected}
          someVisibleRowsSelected={someVisibleRowsSelected}
          onToggleAll={onToggleAll}
          sortKey={sortKey}
          sortDirection={sortDirection}
          onSort={onSort}
        />
        <TableBody
          rows={rows}
          rowKey={rowKey}
          columns={columns}
          selectionEnabled={selectionEnabled}
          selectionMode={selectionMode}
          selectedRowKeys={selectedRowKeys}
          getRowKey={getRowKey}
          onSelectionChange={onSelectionChange}
        />
      </table>
    </div>
  );
}
