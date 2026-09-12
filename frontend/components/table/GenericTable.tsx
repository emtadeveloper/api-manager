"use client";

import { useMemo, useState } from "react";
import DesktopTable from "./desktop/Table";
import EmptyState from "./EmptyState";
import LoadingState from "./LoadingState";
import MobilePagination from "./pagination/MobilePagination";
import DesktopPagination from "./pagination/DesktopPagination";
import MobileTableCard from "./mobile/MobileTableCard";
import TableToolbar from "./toolbar/TableToolbar";
import type {
  GenericTableProps,
  ResolvedTableColumn,
  TableFilterState,
  TableSortDirection,
  TableSortState,
} from "./types";
import { getTableColumnId, getTableRowKey } from "./types";
import {
  filterTableRows,
  paginateTableRows,
  sortTableRows,
} from "./table.utils";

export default function GenericTable<T extends object>({
  data,
  columns,
  rowKey,
  onSelectRow,
  onSelectionChange,
  selectionMode: requestedSelectionMode,
  emptyText = "داده‌ای برای نمایش وجود ندارد",
  loading = false,
  pageSize: initialPageSize = 5,
  pageSizeOptions = [1, 5, 10, 20, 50],
  title,
  onAddNew,
  addLabel = "افزودن",
  onRefresh,
  toolbarActions,
  showToolbar = true,
  searchPlaceholder = "جست‌وجو",
  onVisibleColumnsChange,
  rowActions,
}: GenericTableProps<T>) {
  const resolvedColumns = useMemo<ResolvedTableColumn<T>[]>(
    () => [
      {
        id: "__index",
        title: "#",
        dataIndex: rowKey,
        searchable: false,
        mobileVisible: false,
        isIndex: true,
        render: (_value: T[keyof T], _row: T, index: number) => index + 1,
      },
      ...columns.map((column) => ({ ...column, id: getTableColumnId(column) })),
    ],
    [columns, rowKey],
  );
  const selectionEnabled = Boolean(onSelectRow || onSelectionChange);
  const selectionMode =
    requestedSelectionMode ?? (onSelectRow ? "single" : "multiple");
  const safeInitialPageSize = pageSizeOptions.includes(initialPageSize)
    ? initialPageSize
    : (pageSizeOptions[0] ?? 5);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(safeInitialPageSize);
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [visibleColumnIds, setVisibleColumnIds] = useState<string[]>(() =>
    resolvedColumns.map((column) => column.id),
  );
  const [filterValues, setFilterValues] = useState<TableFilterState>({});
  const [sort, setSort] = useState<TableSortState<T>>({
    key: null,
    direction: null,
  });

  const visibleColumns = useMemo(
    () =>
      resolvedColumns.filter((column) => visibleColumnIds.includes(column.id)),
    [resolvedColumns, visibleColumnIds],
  );

  const filteredRows = useMemo(
    () => filterTableRows(data, resolvedColumns, filterValues),
    [data, filterValues, resolvedColumns],
  );

  const sortedRows = useMemo(
    () => sortTableRows(filteredRows, sort),
    [filteredRows, sort],
  );

  const totalPages = Math.max(1, Math.ceil(sortedRows.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageRows = useMemo(
    () => paginateTableRows(sortedRows, currentPage, pageSize),
    [currentPage, pageSize, sortedRows],
  );
  const mobileRows = useMemo(
    () => sortedRows.slice(0, currentPage * pageSize),
    [currentPage, pageSize, sortedRows],
  );

  const getRowKey = (row: T, index: number) =>
    getTableRowKey(row, rowKey, index);
  const validRowKeys = useMemo(
    () => new Set(data.map((row, index) => getTableRowKey(row, rowKey, index))),
    [data, rowKey],
  );
  const activeSelectedRowKeys = selectedRowKeys.filter((key) =>
    validRowKeys.has(key),
  );

  const emitSelection = (keys: string[]) => {
    setSelectedRowKeys(keys);
    const selectedRows = data.filter((row, index) =>
      keys.includes(getRowKey(row, index)),
    );
    onSelectionChange?.(keys, selectedRows);
    if (onSelectRow) onSelectRow(keys[0] ?? "");
  };

  const handleSelectionChange = (row: T, selected: boolean) => {
    const key = getRowKey(row, data.indexOf(row));
    if (selectionMode === "single") {
      emitSelection(selected ? [key] : []);
      return;
    }
    const nextKeys = selected
      ? [...new Set([...activeSelectedRowKeys, key])]
      : activeSelectedRowKeys.filter((item) => item !== key);
    emitSelection(nextKeys);
  };

  const handleToggleAll = (checked: boolean) => {
    const pageKeys = pageRows.map((row) => getRowKey(row, data.indexOf(row)));
    const nextKeys = checked
      ? [...new Set([...activeSelectedRowKeys, ...pageKeys])]
      : activeSelectedRowKeys.filter((key) => !pageKeys.includes(key));
    emitSelection(nextKeys);
  };

  const handleSort = (column: ResolvedTableColumn<T>) => {
    if (!column.sortable) return;
    const isSameColumn = sort.key === column.dataIndex;
    const nextDirection: TableSortDirection | null = !isSameColumn
      ? "asc"
      : sort.direction === "asc"
        ? "desc"
        : sort.direction === "desc"
          ? null
          : "asc";
    setSort({
      key: nextDirection ? column.dataIndex : null,
      direction: nextDirection,
    });
    setPage(1);
  };

  const handleFilterChange = (columnId: string, value: string) => {
    setFilterValues((current) => {
      if (!value) {
        const next = { ...current };
        delete next[columnId];
        return next;
      }
      return { ...current, [columnId]: value };
    });
    setPage(1);
  };

  const handleVisibleColumnsChange = (columnIds: string[]) => {
    setVisibleColumnIds(columnIds);
    onVisibleColumnsChange?.(
      resolvedColumns.filter((column) => columnIds.includes(column.id)),
    );
  };

  const allVisibleRowsSelected =
    selectionEnabled &&
    pageRows.length > 0 &&
    pageRows.every((row) =>
      activeSelectedRowKeys.includes(getRowKey(row, data.indexOf(row))),
    );
  const someVisibleRowsSelected =
    selectionEnabled &&
    pageRows.some((row) =>
      activeSelectedRowKeys.includes(getRowKey(row, data.indexOf(row))),
    );

  return (
    <div className="app-surface overflow-hidden rounded-[var(--app-radius-lg)]">
      {showToolbar ? (
        <TableToolbar
          title={title}
          columns={resolvedColumns}
          visibleColumnIds={visibleColumnIds}
          filterValues={filterValues}
          onFilterChange={handleFilterChange}
          onVisibleColumnsChange={handleVisibleColumnsChange}
          onAddNew={onAddNew}
          addLabel={addLabel}
          onRefresh={onRefresh}
          toolbarActions={toolbarActions}
          searchPlaceholder={searchPlaceholder}
          totalItems={sortedRows.length}
        />
      ) : null}

      {loading ? (
        <LoadingState />
      ) : sortedRows.length === 0 ? (
        <EmptyState description={emptyText} />
      ) : (
        <>
          <DesktopTable
            rows={pageRows}
            rowKey={rowKey}
            columns={visibleColumns}
            selectionEnabled={selectionEnabled}
            selectionMode={selectionMode}
            selectedRowKeys={activeSelectedRowKeys}
            getRowKey={getRowKey}
            allVisibleRowsSelected={allVisibleRowsSelected}
            someVisibleRowsSelected={someVisibleRowsSelected}
            onToggleAll={handleToggleAll}
            onSelectionChange={handleSelectionChange}
            sortKey={sort.key}
            sortDirection={sort.direction}
            onSort={handleSort}
          />
          <div
            id="scrollableDiv"
            className="max-h-[70vh] overflow-y-auto md:hidden"
          >
            <MobilePagination
              items={mobileRows}
              renderItem={(row) => (
                <MobileTableCard
                  row={row}
                  rowIndex={sortedRows.indexOf(row)}
                  columns={visibleColumns}
                  selected={activeSelectedRowKeys.includes(
                    getRowKey(row, data.indexOf(row)),
                  )}
                  selectionEnabled={selectionEnabled}
                  selectionMode={selectionMode}
                  onSelectionChange={handleSelectionChange}
                  rowActions={rowActions?.(row)}
                />
              )}
              fetchNextPage={() =>
                setPage((value) => Math.min(value + 1, totalPages))
              }
              hasMore={mobileRows.length < sortedRows.length}
            />
          </div>
          <DesktopPagination
            page={currentPage}
            totalPages={totalPages}
            pageSize={pageSize}
            pageSizeOptions={pageSizeOptions}
            onPageChange={setPage}
            onPageSizeChange={(nextPageSize) => {
              setPageSize(nextPageSize);
              setPage(1);
            }}
          />
        </>
      )}
    </div>
  );
}
