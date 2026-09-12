import type {
  ResolvedTableColumn,
  TableFilterState,
  TableSortState,
} from "./types";

export function compareTableValues(left: unknown, right: unknown): number {
  if (left === right) return 0;
  if (left === null || left === undefined) return -1;
  if (right === null || right === undefined) return 1;
  if (typeof left === "number" && typeof right === "number")
    return left - right;

  return String(left).localeCompare(String(right), "fa", {
    numeric: true,
    sensitivity: "base",
  });
}

export function filterTableRows<T extends object>(
  rows: T[],
  columns: ResolvedTableColumn<T>[],
  filters: TableFilterState,
): T[] {
  return rows.filter((row) =>
    columns.every((column) => {
      const filter = filters[column.id];
      if (!filter || column.searchable === false || column.isAction)
        return true;

      return String(row[column.dataIndex] ?? "")
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());
    }),
  );
}

export function sortTableRows<T extends object>(
  rows: T[],
  sort: TableSortState<T>,
): T[] {
  if (!sort.key || !sort.direction) return rows;

  return [...rows].sort((left, right) => {
    const result = compareTableValues(
      left[sort.key as keyof T],
      right[sort.key as keyof T],
    );
    return sort.direction === "asc" ? result : -result;
  });
}

export function paginateTableRows<T>(
  rows: T[],
  page: number,
  pageSize: number,
): T[] {
  const start = (page - 1) * pageSize;
  return rows.slice(start, start + pageSize);
}
