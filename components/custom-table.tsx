"use client";

import { RestService } from "@/generated/sqlite";
import { Input, Table, TablePaginationConfig } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import { useState } from "react";

// const data = [
//   { key: "1", name: "احمد حسن نژاد سادات محله", email: "ali1@test.com" },
//   { key: "2", name: "Ali", email: "ali2@test.com" },
//   { key: "3", name: "Ali", email: "ali3@test.com" },
//   { key: "4", name: "Ali", email: "ali4@test.com" },
//   { key: "5", name: "Ali", email: "ali5@test.com" },
//   { key: "6", name: "Ali", email: "ali6@test.com" },
//   { key: "7", name: "Ali", email: "ali7@test.com" },
//   { key: "8", name: "Ali", email: "ali8@test.com" },
//   { key: "9", name: "Ali", email: "ali9@test.com" },
//   { key: "10", name: "Ali", email: "ali10@test.com" },
//   { key: "11", name: "Ali", email: "ali11@test.com" },
//   { key: "12", name: "Ali", email: "ali12@test.com" },
//   { key: "13", name: "Ali", email: "ali13@test.com" },
//   { key: "14", name: "Ali", email: "ali14@test.com" },
//   { key: "15", name: "Reza", email: "reza@test.com" },
// ];

// One row type

// Searchable columns
type Props = {
  data: RestService[];
  handleSelectedKey: (value: string) => void;
};
type DataType = Props["data"][number];
type SearchableKey = Exclude<keyof DataType, "id">;
export default function CustomTable({ handleSelectedKey, data }: Props) {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const getColumnSearchProps = (dataIndex: SearchableKey) => ({
    filterDropdown: ({
      selectedKeys,
      setSelectedKeys,
      confirm,
    }: FilterDropdownProps) => (
      <div className="p-2">
        <Input
          allowClear
          value={selectedKeys[0] as string}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => confirm()}
          placeholder={`Search ${dataIndex}`}
        />
      </div>
    ),

    onFilter: (value: React.Key | boolean, record: DataType) =>
      String(record[dataIndex])
        .toLowerCase()
        .includes(String(value).toLowerCase()),
  });

  const columnConfig: {
    title: string;
    dataIndex: SearchableKey;
  }[] = [
    {
      title: "نام فارسی",
      dataIndex: "persianName",
    },
    {
      title: "نام لاتین",
      dataIndex: "latinName",
    },
  ];

  const columns = columnConfig.map((col) => ({
    title: col.title,
    dataIndex: col.dataIndex,
    id: col.dataIndex,
    ...getColumnSearchProps(col.dataIndex),
  }));

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, unknown>,
  ) => {
    const hasFilter = Object.values(filters).some(
      (value) => value !== null && value !== undefined,
    );

    if (hasFilter) {
      setCurrent(1);
    } else {
      setCurrent(pagination.current ?? 1);
    }

    setPageSize(pagination.pageSize ?? 5);
  };
  // const [filteredData, setFilteredData] = useState(data);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const rowSelection = {
    type: "radio" as const,

    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
      handleSelectedKey(newSelectedRowKeys[0].toString());
    },
  };
  return (
    <Table<DataType>
      className="mt-2"
      rowKey="id"
      columns={[
        {
          title: "ردیف",
          key: "index",
          render: (_: unknown, _record: DataType, index: number) => index + 1,
        },
        ...columns,
      ]}
      dataSource={data}
      pagination={{
        // className: "bg-red-100",
        pageSize: pageSize,
        showTotal: (total) => ` ${total} رکورد`,
      }}
      rowSelection={rowSelection}
    />
  );
}
