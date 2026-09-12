import type { ReactNode } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";

interface MobileCardHeaderProps {
  title: ReactNode;
  summary: ReactNode;
  expanded: boolean;
  onToggle: () => void;
  actions?: ReactNode;
}

export default function MobileCardHeader({
  title,
  summary,
  expanded,
  onToggle,
  actions,
}: MobileCardHeaderProps) {
  return (
    <div className="flex items-start gap-3">
      <Button
        type="text"
        block
        className="!h-auto min-w-0 flex-1 !justify-start !p-0 text-right"
        onClick={(event) => {
          event.stopPropagation();
          onToggle();
        }}
        aria-expanded={expanded}
      >
        <span className="flex min-w-0 flex-col items-start">
          <Typography.Text strong ellipsis>
            {title}
          </Typography.Text>
          <Typography.Text type="secondary" ellipsis>
            {summary}
          </Typography.Text>
        </span>
      </Button>
      {actions}
      <Button
        type="text"
        size="small"
        className="shrink-0"
        icon={expanded ? <UpOutlined /> : <DownOutlined />}
        onClick={(event) => {
          event.stopPropagation();
          onToggle();
        }}
        aria-label={expanded ? "بستن جزئیات" : "مشاهده جزئیات"}
      />
    </div>
  );
}
