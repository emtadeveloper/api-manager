export function filterBySearchLabel<T>(
  value: string,
  record: T,
  dataIndex: keyof T,
): boolean {
  return String(record[dataIndex] ?? "")
    .toLowerCase()
    .includes(String(value).toLowerCase());
}
