import type { ResolvedTableColumn } from "../types";
import { getTableRowKey } from "../types";
import TableCell from "./TableCell";

interface TableRowProps<T extends object> {
  row: T;
  rowIndex: number;
  rowKey: keyof T;
  columns: ResolvedTableColumn<T>[];
  selectionEnabled: boolean;
  selectionMode: "single" | "multiple";
  selected: boolean;
  onSelectionChange: (row: T, selected: boolean) => void;
}

export default function TableRow<T extends object>({
  row,
  rowIndex,
  rowKey,
  columns,
  selectionEnabled,
  selectionMode,
  selected,
  onSelectionChange,
}: TableRowProps<T>) {
  return (
    <tr
      className={`transition-colors hover:bg-[color-mix(in_srgb,var(--app-primary)_8%,transparent)] ${selected ? "bg-[color-mix(in_srgb,var(--app-primary)_12%,transparent)]" : ""}`}
    >
      {selectionEnabled ? (
        <td className="w-12 border-b border-[var(--app-border)] px-3 py-3 text-center">
          <input
            type={selectionMode === "multiple" ? "checkbox" : "radio"}
            name={
              selectionMode === "single" ? "generic-table-selection" : undefined
            }
            checked={selected}
            onChange={(event) => onSelectionChange(row, event.target.checked)}
            aria-label={`انتخاب ردیف ${getTableRowKey(row, rowKey, rowIndex)}`}
            className="accent-[var(--app-primary)]"
          />
        </td>
      ) : null}
      {columns.map((column) => (
        <TableCell
          key={column.id}
          column={column}
          row={row}
          rowIndex={rowIndex}
        />
      ))}
    </tr>
  );
}
