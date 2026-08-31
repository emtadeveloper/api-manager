"use client";

import { Button, Modal } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import type { ButtonProps } from "antd";

interface ConfirmActionButtonProps extends Omit<ButtonProps, "onClick"> {
  title?: string;
  content?: string;
  onConfirm: () => void | Promise<void>;
}

export default function ConfirmActionButton({
  title = "آیا مطمئن هستید؟",
  content = "این عملیات قابل بازگشت نیست.",
  onConfirm,
  icon = <DeleteFilled />,
  danger = true,
  children,
  ...props
}: ConfirmActionButtonProps) {
  const handleClick = () => {
    Modal.confirm({
      title,
      content,
      okText: "بله",
      cancelText: "خیر",
      onOk: onConfirm,
    });
  };

  return (
    <Button icon={icon} danger={danger} onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}
