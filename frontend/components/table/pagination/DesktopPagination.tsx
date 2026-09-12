import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Select, Space, Typography } from "antd";

interface DesktopPaginationProps {
  page: number;
  totalPages: number;
  pageSize: number;
  pageSizeOptions: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

export default function DesktopPagination({
  page,
  totalPages,
  pageSize,
  pageSizeOptions,
  onPageChange,
  onPageSizeChange,
}: DesktopPaginationProps) {
  const options = Array.from(
    new Set(
      pageSizeOptions.filter(
        (option) => Number.isInteger(option) && option > 0,
      ),
    ),
  ).map((option) => ({
    value: option,
    label: <span dir="ltr">{option}</span>,
  }));

  return (
    <nav
      className="relative hidden min-h-14 items-center border-t border-[var(--app-border)] px-4 py-3 md:flex"
      aria-label="صفحه‌بندی"
    >
      <Space className="absolute right-4" size="small">
        <Typography.Text type="secondary">نمایش</Typography.Text>
        <Select
          size="small"
          style={{ width: 72 }}
          popupMatchSelectWidth={96}
          value={pageSize}
          options={options}
          onChange={onPageSizeChange}
          aria-label="تعداد ردیف در صفحه"
        />
      </Space>
      <Space className="absolute left-1/2 -translate-x-1/2" size="small">
        <Button
          type="text"
          shape="circle"
          icon={<RightOutlined />}
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          aria-label="صفحه قبل"
        />
        <Typography.Text className="min-w-24 text-center">
          صفحه {page} از {totalPages}
        </Typography.Text>
        <Button
          type="text"
          shape="circle"
          icon={<LeftOutlined />}
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          aria-label="صفحه بعد"
        />
      </Space>
    </nav>
  );
}
