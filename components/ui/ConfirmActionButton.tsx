"use client";

import { Button, ButtonProps } from "antd";
import { useAlert } from "@/hooks/useAlert";

interface ConfirmActionButtonProps extends Omit<ButtonProps, "onClick"> {
  title?: string;
  content?: string;
  onConfirm: () => void | Promise<void>;
}

export default function ConfirmActionButton({
  title = "آیا مطمئن هستید؟",
  content = "این عملیات قابل بازگشت نیست.",
  onConfirm,
  children,
  ...buttonProps
}: ConfirmActionButtonProps) {
  const { confirm } = useAlert();

  return (
    <Button
      {...buttonProps}
      onClick={() =>
        confirm({
          title,
          content,
          onOk: onConfirm,
        })
      }
    >
      {children}
    </Button>
  );
}
