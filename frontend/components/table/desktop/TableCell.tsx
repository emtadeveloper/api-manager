import type { ReactNode } from "react";
import type { ResolvedTableColumn } from "../types";

interface TableCellProps<T extends object> {
  column: ResolvedTableColumn<T>;
  row: T;
  rowIndex: number;
}

export function renderTableCellContent<T extends object>(
  column: ResolvedTableColumn<T>,
  row: T,
  rowIndex: number,
): ReactNode {
  const value = row[column.dataIndex];
  return column.render
    ? column.render(value, row, rowIndex)
    : String(value ?? "—");
}

export default function TableCell<T extends object>({
  column,
  row,
  rowIndex,
}: TableCellProps<T>) {
  const content = renderTableCellContent(column, row, rowIndex);

  return (
    <td
      className="border-b border-[var(--app-border)] px-4 py-3 align-middle text-sm app-text-secondary"
      style={{ width: column.width }}
    >
      {content}
    </td>
  );
}
