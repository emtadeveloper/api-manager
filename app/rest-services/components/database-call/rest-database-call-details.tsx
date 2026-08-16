"use client";

import { RestService } from "@/generated/sqlite";
import { Input, Table, TablePaginationConfig } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import { useState } from "react";

type Props = {
  data: Record<string, unknown>[];
  handleSelectedKey: (value: string) => void;
};
type DataType = Props["data"][number];
type SearchableKey = Exclude<keyof DataType, "id">;
export default function RestDatabaseCallDetails({
  handleSelectedKey,
  data,
}: Props) {
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
  }[] = Object.keys(Object.values(data)[0]).map(d => 
 ( {
    title: d,
    dataIndex: d,
  })
    )
  // console.log(
  //  Object.keys(Object.values(data)[0]).map(
  //   k =>({name: k, value: Object.values(data)[0][k]})
  //  ))
  // [
  //   {
  //     title: "نام فارسی",
  //     dataIndex: "persianName",
  //   },
  //   {
  //     title: "نام لاتین",
  //     dataIndex: "latinName",
  //   },
  // ];

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
