import { useState } from "react";
import type { ReactNode } from "react";
import { Card, Checkbox, Radio } from "antd";
import type { ResolvedTableColumn } from "../types";
import MobileCardActions from "./MobileCardActions";
import MobileCardContent from "./MobileCardContent";
import MobileCardHeader from "./MobileCardHeader";

interface MobileTableCardProps<T extends object> {
  row: T;
  rowIndex: number;
  columns: ResolvedTableColumn<T>[];
  selected: boolean;
  selectionEnabled: boolean;
  selectionMode: "single" | "multiple";
  onSelectionChange: (row: T, selected: boolean) => void;
  rowActions?: ReactNode;
}

export default function MobileTableCard<T extends object>({
  row,
  rowIndex,
  columns,
  selected,
  selectionEnabled,
  selectionMode,
  onSelectionChange,
  rowActions,
}: MobileTableCardProps<T>) {
  const [expanded, setExpanded] = useState(false);
  const actionColumn = columns.find((column) => column.isAction);
  const contentColumns = columns.filter(
    (column) =>
      !column.isAction && !column.isIndex && column.mobileVisible !== false,
  );
  const summaryColumns =
    contentColumns.filter((column) => column.mobileSummary).length > 0
      ? contentColumns.filter((column) => column.mobileSummary)
      : contentColumns.slice(0, 2);
  const titleColumn = summaryColumns[0] ?? contentColumns[0];
  const summaryColumn = summaryColumns[1] ?? summaryColumns[0];
  const title = titleColumn
    ? titleColumn.render
      ? titleColumn.render(row[titleColumn.dataIndex], row, rowIndex)
      : String(row[titleColumn.dataIndex] ?? "—")
    : "—";
  const summary = summaryColumn
    ? summaryColumn.render
      ? summaryColumn.render(row[summaryColumn.dataIndex], row, rowIndex)
      : String(row[summaryColumn.dataIndex] ?? "—")
    : "";
  const actionContent = actionColumn?.render
    ? actionColumn.render(row[actionColumn.dataIndex], row, rowIndex)
    : rowActions;
  const selectionControl = selectionEnabled ? (
    selectionMode === "multiple" ? (
      <Checkbox
        checked={selected}
        onChange={(event) => onSelectionChange(row, event.target.checked)}
        onClick={(event) => event.stopPropagation()}
        aria-label="انتخاب رکورد"
      />
    ) : (
      <Radio
        checked={selected}
        onChange={(event) => onSelectionChange(row, event.target.checked)}
        onClick={(event) => event.stopPropagation()}
        aria-label="انتخاب رکورد"
      />
    )
  ) : null;

  return (
    <Card
      size="small"
      className={`transition-shadow ${expanded ? "shadow-[var(--app-shadow-md)]" : "shadow-[var(--app-shadow-sm)]"} ${selected ? "ring-1 ring-[var(--app-primary)]" : ""}`}
      onClick={() => setExpanded((value) => !value)}
    >
      <MobileCardHeader
        title={title}
        summary={summary}
        expanded={expanded}
        onToggle={() => setExpanded((value) => !value)}
        actions={
          selectionControl || actionContent ? (
            <MobileCardActions>
              {selectionControl}
              {actionContent}
            </MobileCardActions>
          ) : undefined
        }
      />
      {expanded ? (
        <MobileCardContent
          row={row}
          rowIndex={rowIndex}
          columns={contentColumns}
        />
      ) : null}
    </Card>
  );
}
