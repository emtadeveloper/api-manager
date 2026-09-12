import { useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Button, Checkbox, Modal, Space, Typography } from "antd";
import type { ResolvedTableColumn } from "../types";

interface ColumnManagerProps<T extends object> {
  columns: ResolvedTableColumn<T>[];
  visibleColumnIds: string[];
  onChange: (columnIds: string[]) => void;
}

export default function ColumnManager<T extends object>({
  columns,
  visibleColumnIds,
  onChange,
}: ColumnManagerProps<T>) {
  const [open, setOpen] = useState(false);

  const toggleColumn = (columnId: string) => {
    if (visibleColumnIds.includes(columnId)) {
      if (visibleColumnIds.length === 1) return;
      onChange(visibleColumnIds.filter((id) => id !== columnId));
      return;
    }
    onChange([...visibleColumnIds, columnId]);
  };

  return (
    <>
      <Button
        type="text"
        icon={<SettingOutlined />}
        onClick={() => setOpen(true)}
      >
        ستون‌ها
      </Button>
      <Modal
        open={open}
        title="مدیریت ستون‌ها"
        onCancel={() => setOpen(false)}
        footer={null}
        centered
      >
        <Space orientation="vertical" size="small" className="w-full">
          {columns
            .filter((column) => !column.isAction && !column.isIndex)
            .map((column) => (
              <Checkbox
                key={column.id}
                checked={visibleColumnIds.includes(column.id)}
                disabled={
                  visibleColumnIds.length === 1 &&
                  visibleColumnIds.includes(column.id)
                }
                onChange={() => toggleColumn(column.id)}
              >
                <Typography.Text>{column.title}</Typography.Text>
              </Checkbox>
            ))}
        </Space>
      </Modal>
    </>
  );
}
