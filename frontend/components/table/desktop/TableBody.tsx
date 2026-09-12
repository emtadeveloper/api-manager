import type { ResolvedTableColumn } from "../types";
import TableRow from "./TableRow";

interface TableBodyProps<T extends object> {
  rows: T[];
  rowKey: keyof T;
  columns: ResolvedTableColumn<T>[];
  selectionEnabled: boolean;
  selectionMode: "single" | "multiple";
  selectedRowKeys: string[];
  getRowKey: (row: T, index: number) => string;
  onSelectionChange: (row: T, selected: boolean) => void;
}

export default function TableBody<T extends object>({
  rows,
  rowKey,
  columns,
  selectionEnabled,
  selectionMode,
  selectedRowKeys,
  getRowKey,
  onSelectionChange,
}: TableBodyProps<T>) {
  return (
    <tbody>
      {rows.map((row, index) => (
        <TableRow
          key={getRowKey(row, index)}
          row={row}
          rowIndex={index}
          rowKey={rowKey}
          columns={columns}
          selectionEnabled={selectionEnabled}
          selectionMode={selectionMode}
          selected={selectedRowKeys.includes(getRowKey(row, index))}
          onSelectionChange={onSelectionChange}
        />
      ))}
    </tbody>
  );
}
