import type { ReactNode } from "react";
import type { ResolvedTableColumn } from "../types";
import MobileTableCard from "./MobileTableCard";

interface MobileTableProps<T extends object> {
  rows: T[];
  columns: ResolvedTableColumn<T>[];
  selectedRowKeys: string[];
  selectionEnabled: boolean;
  selectionMode: "single" | "multiple";
  getRowKey: (row: T, index: number) => string;
  onSelectionChange: (row: T, selected: boolean) => void;
  rowActions?: (row: T) => ReactNode;
}

export default function MobileTable<T extends object>({
  rows,
  columns,
  selectedRowKeys,
  selectionEnabled,
  selectionMode,
  getRowKey,
  onSelectionChange,
  rowActions,
}: MobileTableProps<T>) {
  return (
    <div className="space-y-3 md:hidden">
      {rows.map((row, index) => (
        <MobileTableCard
          key={getRowKey(row, index)}
          row={row}
          rowIndex={index}
          columns={columns}
          selected={selectedRowKeys.includes(getRowKey(row, index))}
          selectionEnabled={selectionEnabled}
          selectionMode={selectionMode}
          onSelectionChange={onSelectionChange}
          rowActions={rowActions?.(row)}
        />
      ))}
    </div>
  );
}
