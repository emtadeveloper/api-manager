import { Descriptions } from "antd";
import { renderTableCellContent } from "../desktop/TableCell";
import type { ResolvedTableColumn } from "../types";

interface MobileCardContentProps<T extends object> {
  row: T;
  rowIndex: number;
  columns: ResolvedTableColumn<T>[];
}

export default function MobileCardContent<T extends object>({
  row,
  rowIndex,
  columns,
}: MobileCardContentProps<T>) {
  return (
    <Descriptions
      className="mt-3"
      size="small"
      column={1}
      items={columns.map((column) => ({
        key: column.id,
        label: column.title,
        children: renderTableCellContent(column, row, rowIndex),
      }))}
    />
  );
}
